"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInput = exports.createBlogInput = exports.signInInput = exports.signUpInput = void 0;
const zod_1 = require("zod");
exports.signUpInput = zod_1.z.object({
    email: zod_1.z.string().email(),
    username: zod_1.z.string(),
    password: zod_1.z.string()
});
exports.signInInput = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string()
});
exports.createBlogInput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string()
});
exports.updateBlogInput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    id: zod_1.z.string()
});
