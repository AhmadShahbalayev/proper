import { ChatGptService } from './chat-gpt.service';
export declare class ChatGptController {
    private readonly chatGptService;
    constructor(chatGptService: ChatGptService);
    askChatGpt(prompt: string): Promise<any>;
}
