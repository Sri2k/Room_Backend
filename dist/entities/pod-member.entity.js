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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodMember = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const pod_entity_1 = require("./pod.entity");
let PodMember = class PodMember {
};
exports.PodMember = PodMember;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], PodMember.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], PodMember.prototype, "podId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.podMembers),
    __metadata("design:type", user_entity_1.User)
], PodMember.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pod_entity_1.Pod, pod => pod.podMembers),
    __metadata("design:type", pod_entity_1.Pod)
], PodMember.prototype, "pod", void 0);
exports.PodMember = PodMember = __decorate([
    (0, typeorm_1.Entity)()
], PodMember);
//# sourceMappingURL=pod-member.entity.js.map