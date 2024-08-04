import { ConfigService } from '@nestjs/config';
export declare class ChatGptService {
    private configService;
    private readonly apiKey;
    private readonly apiUrl;
    constructor(configService: ConfigService);
    getChatGptResponse(prompt: string): Promise<any>;
}
