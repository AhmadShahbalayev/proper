"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGptController = void 0;
const common_1 = require("@nestjs/common");
const chat_gpt_service_1 = require("./chat-gpt.service");
let ChatGptController = class ChatGptController {
    constructor(chatGptService) {
        this.chatGptService = chatGptService;
    }
    async askChatGpt(prompt) {
        return this.chatGptService.getChatGptResponse(prompt);
    }
};
exports.ChatGptController = ChatGptController;
__decorate([
    (0, common_1.Post)('ask'),
    __param(0, (0, common_1.Body)('prompt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChatGptController.prototype, "askChatGpt", null);
exports.ChatGptController = ChatGptController = __decorate([
    (0, common_1.Controller)('chat-gpt'),
    __metadata("design:paramtypes", [chat_gpt_service_1.ChatGptService])
], ChatGptController);
//# sourceMappingURL=chat-gpt.controller.js.map