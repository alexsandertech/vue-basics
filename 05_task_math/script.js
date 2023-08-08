new Vue({
    el: '#app',
    data: {
      n1: 0,
      n2: 0,
      operator: '+',
      n3: ''
    },
    created() {
      this.n1 = this.getRandomInt(0, 10);
      this.n2 = this.getRandomInt(0, 10);
      this.operator = this.getRandomOperator();
    },
    methods: {
      getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      getRandomOperator() {
        const operators = ['+', '-', '*', '/'];
        const randomIndex = Math.floor(Math.random() * operators.length);
        return operators[randomIndex];
      },
      calculateResult() {
        switch (this.operator) {
          case '+':
            return this.n1 + this.n2;
          case '-':
            return this.n1 - this.n2;
          case '*':
            return this.n1 * this.n2;
          case '/':
            return this.n1 / this.n2;
        }
      }
    },
    computed: {
      resultMessage() {
        if (this.n3 === '') return '';
        if (parseInt(this.n3) === this.calculateResult()) return 'ACERTOU!';
        return 'ERROU!';
      }
    }
  });
  