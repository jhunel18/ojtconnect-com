export const conversations = [
    { id: 1, contactName: "John Doe", unread: 2, onlineText: "About a minute ago" },
    { id: 2, contactName: "Juan Dela Cruz", unread: 0, onlineText: "About a minute ago" },
    // Add more conversations as needed
  ]
export const messages = {
    1: [
      { id: 1, text: "Hey, how are you?", sender: "You", timestamp: Date.now() - 5000 },
      { id: 2, text: "I'm good, thanks! How about you?", sender: "John Doe", timestamp: Date.now() - 3000 },
      { id: 3, text: "When will you going to pay your debt to me?", sender: "You", timestamp: Date.now() - 3000 },
    ],
    2: [
      { id: 1, text: "Hi there!", sender: "You", timestamp: Date.now() - 7000 },
      { id: 2, text: "Hello! What's up?", sender: "Juan Dela Cruz", timestamp: Date.now() - 4000 },
      // Add more messages as needed
    ],
    // Add more message arrays for other conversations as needed
  }
export const selectedConversationId = null
