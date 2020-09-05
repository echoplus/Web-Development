const rtlcss = require("rtlcss");
const result = rtlcss.process("body { direction:ltr; }");
//result == body { direction:rtl; }
