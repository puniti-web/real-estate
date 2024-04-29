// ActionProvider.js
class ActionProvider {
    constructor(createChatBotMessage) {
      this.createChatBotMessage = createChatBotMessage;
    }
  
    handleNameInput = (name) => {
      const message = this.createChatBotMessage(`Hello ${name}, Welcome to Spaces by Parth Sharma.`);
      this.updateChatbotState(message);
    };
  
    // Implement similar methods for phone number, bedroom requirements, budget, and city
    // You can customize the responses based on user input
  }
  
  export default ActionProvider;
  