"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bit_envs_internal_babel_base_compiler_1 = __importDefault(require("@bit/bit.envs.internal.babel-base-compiler"));
require("metro-react-native-babel-preset");
const compiledFileTypes = ['js', 'jsx'];
const compile = (files, distPath) => {
    return bit_envs_internal_babel_base_compiler_1.default(files, distPath, __dirname, compiledFileTypes);
};
exports.default = {
    compile,
};
