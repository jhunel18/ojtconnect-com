// messagesReducer.js
import { FILTER_ALL_MESSAGES, FILTER_UNREAD_MESSAGES, SELECT_CONVERSATION, RESET_UNREAD_MESSAGES } from '../actions/messagesActions';
import { conversations, messages, selectedConversationId } from '../../data/MessageData';

const initialState = {
  conversations: conversations,
  messages: messages,
  selectedConversationId: selectedConversationId,
  filter: "All",
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CONVERSATION:
        return {
            ...state,
            selectedConversationId: action.payload,
    };
    case FILTER_ALL_MESSAGES:
        return {
            ...state,
            filter: 'All',
            conversations: conversations, // Reset conversations to display all messages
        };
    case FILTER_UNREAD_MESSAGES:
        return {
            ...state,
            filter: 'Unread',
            conversations: filterConversations(state.conversations, 'Unread'), // Use filterConversations function
        };
    case RESET_UNREAD_MESSAGES:
        const updatedConversations = state.conversations.map((conversation) =>
            conversation.id === action.payload ? { ...conversation, unread: 0 } : conversation
        );
        return {
            ...state,
            conversations: updatedConversations,
        };
    // Add other cases for handling additional actions if needed
    default:
        return state;
  }
};

// Helper function to filter conversations based on the filter
const filterConversations = (conversations, filter) => {
    if (filter === 'Unread') {
      return conversations.filter((conversation) => conversation.unread > 0);
    }
    // For 'All' filter, return all conversations
    return conversations;
};

export default messagesReducer;
