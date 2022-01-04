"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        yield knex('CallCosts').insert([
            { DDD_origem: '11', DDD_destino: '16', custo: '1.90' },
            { DDD_origem: '11', DDD_destino: '17', custo: '1.70' },
            { DDD_origem: '11', DDD_destino: '18', custo: '0.90' },
            { DDD_origem: '16', DDD_destino: '11', custo: '2.90' },
            { DDD_origem: '17', DDD_destino: '11', custo: '2.70' },
            { DDD_origem: '18', DDD_destino: '11', custo: '1.90' },
        ]);
    });
}
exports.seed = seed;
//# sourceMappingURL=create_items.js.map