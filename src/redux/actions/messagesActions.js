// messageActions.js
export const SELECT_CONVERSATION = 'SELECT_CONVERSATION';
export const FILTER_ALL_MESSAGES = 'FILTER_ALL_MESSAGES';
export const FILTER_UNREAD_MESSAGES = 'FILTER_UNREAD_MESSAGES';
export const RESET_UNREAD_MESSAGES = 'RESET_UNREAD_MESSAGES';

export const selectConversation = (conversationId) => ({
  type: SELECT_CONVERSATION,
  payload: conversationId,
});

export const filterAllMessages = () => ({
    type: FILTER_ALL_MESSAGES,
});

export const filterUnreadMessages = () => ({
    type: FILTER_UNREAD_MESSAGES,
});

export const resetUnreadMessages = (conversationId) => ({
    type: RESET_UNREAD_MESSAGES,
    payload: conversationId,
});
