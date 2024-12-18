var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
export const submitContactForm = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.post('/api/contact-updated', data);
        console.log('Form başarıyla gönderildi:', response.data);
    }
    catch (error) {
        console.error('Form gönderimi sırasında hata:', error);
        throw error; // Hatanın frontend tarafından ele alınabilmesi için fırlatılır.
    }
});
//# sourceMappingURL=contactService.js.map