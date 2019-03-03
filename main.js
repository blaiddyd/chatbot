const chat = new Vue ({
    el: '#chatwmelol',
    data: {
        lines: [
            'I am better than you xD',
            'I am gigasmurfing',
            'I am here for you, but u are the big chungus',
        ],
        show: false,
    },
    methods: {
        giveLine() {
            return this.lines[Math.floor(Math.random() * this.lines.length)];
        },
    },
});
