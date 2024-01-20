import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import {formatDate} from "@fullcalendar/core"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import listPlugin from "@fullcalendar/list"
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material"

const CalendarComp = () => {
    const [currentEvents, setCurrentEvents] = useState([])
    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event")
        const calendarAPI = selected.view.calendar
        calendarAPI.unselect()
        if (title) {
          calendarAPI.addEvent({
            id: `${selected.dateStr}-${title}`,
            title,
            start: selected.startStr,
            end: selected.endStr,
            allDay: selected.allDay
          })
        }
    }
    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)){
          selected.event.remove()
        }
      }
    return (<>
        <Box sx={{background: '#ffffff', p: '25px', border: '1px solid black', borderRadius: '20px'}}>
            <Box display={'flex'} justifyContent={"center"}>
                {/*Calendar Side Bar*/}
                {/*
                    <Box flex={"1 1 20%"} backgroundColor={"pink"} p={"15px"} borderRadius={"4px"}>
                        <Typography variant='h5'>Events</Typography>
                        <List>
                        {currentEvents.map((event) => (
                            <ListItem key={event.id}
                            sx={{
                                backgroundColor: "orange",
                                margin: "10px 0",
                                borderRadius: "2px"
                            }}
                            >
                            <ListItemText
                                primary={event.title}
                                secondary={
                                <Typography>
                                    {formatDate(event.start, {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric"
                                    })}
                                </Typography>
                                }
                            />
                            </ListItem>
                        ))}
                        </List>
                    </Box>
                */}

                {/*Calendar */}
                <Box flex={"1 1 100%"}>
                    <FullCalendar 
                        height={"75vh"}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                        headerToolbar={{
                            left: "title",
                            center: "",
                            right: "prev,next"
                        }}
                        initialView= {'dayGridMonth'}
                        editable= {true}
                        selectable= {true}
                        selectMirror= {true}
                        dayMaxEvents= {true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            {id: "12345", title: "Awa ko", date: "2024-01-05"},
                            {id: "4321", title: "Taena may pasok na ule bukas", date: "2024-01-15"},
                        ]}
                    />
                </Box>
            </Box>
            
        </Box>
    </>)
}

export default CalendarComp
