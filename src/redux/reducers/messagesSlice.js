// messagesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { conversations, messages, selectedConversationId } from '../../data/MessageData';

const initialState = {
  conversations: conversations,
  messages: messages,
  selectedConversationId: selectedConversationId,
  filter: 'All',
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    selectConversation: (state, action) => {
      state.selectedConversationId = action.payload;
    },
    filterAllMessages: (state) => {
      state.filter = 'All';
      state.conversations = conversations;
    },
    filterUnreadMessages: (state) => {
      const filteredConversations = filterConversations(state.conversations, 'Unread');
      const selectedConversationStillExists = filteredConversations.some(
        (conversation) => conversation.id === state.selectedConversationId
      );

      state.filter = 'Unread';
      state.conversations = filteredConversations;
      state.selectedConversationId = selectedConversationStillExists
        ? state.selectedConversationId
        : filteredConversations.length > 0
        ? filteredConversations[0].id
        : null;
    },
    resetUnreadMessages: (state, action) => {
      state.conversations = state.conversations.map((conversation) =>
        conversation.id === action.payload ? { ...conversation, unread: 0 } : conversation
      );
    },
  },
});

// Export action creators
export const {
  selectConversation,
  filterAllMessages,
  filterUnreadMessages,
  resetUnreadMessages,
} = messagesSlice.actions;

// Export the reducer
export default messagesSlice.reducer;

// Helper function to filter conversations based on the filter
const filterConversations = (conversations, filter) => {
  if (filter === 'Unread') {
    return conversations.filter((conversation) => conversation.unread > 0);
  }
  // For 'All' filter, return all conversations
  return conversations;
};
