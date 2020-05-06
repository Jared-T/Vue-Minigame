let app = new Vue({
    el: "#app",
    data: {
      isStarted: false,
      playerHealth: 100,
      monsterHealth: 100,
      outputLog: [],
      monsterAttack: true
    },
    methods: {
        startGame: function() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.isStarted = !this.isStarted;
            this.outputLog = [];
            this.outputLog.push({
                text: "The game has begun!",
                isPlayer: false
            });
          },
          
          attack: function(event) {
            let playerAttack = Math.floor(Math.random() * 12);
            let monsterAttack = Math.floor(Math.random() * 10);

            this.playerHealth -= playerAttack;
            this.monsterHealth -= monsterAttack;
            
            this.outputLog.push({
                text: "Monster attacked and took "+playerAttack+" health!", 
                isPlayer: true});
            this.outputLog.push({
                text: "Player attacked and got back "+monsterAttack+" health!", 
                isPlayer: false
            });

          },
          
          specialAttack: function() {
            let playerAttack = Math.floor(Math.random() * 10);
            let monsterAttack = Math.floor(Math.random() * 15);

            this.playerHealth -= playerAttack;
            this.monsterHealth -= monsterAttack;

            this.outputLog.push({
                text: "Monster attacked and took "+playerAttack+" health!", 
                isPlayer: true});
            this.outputLog.push({
                text: "Player attacked and got back "+monsterAttack+" health!", 
                isPlayer: false
            });
          },
          
          healMe: function() {
            let playerAttack = Math.floor(Math.random() * 10);
            let monsterAttack = Math.floor(Math.random() * 15);

            this.playerHealth -= playerAttack;
            this.playerHealth += monsterAttack;

            this.outputLog.push({
                text: "Monster attacked and took "+playerAttack+" health!", 
                isPlayer: true});
            this.outputLog.push({
                text: "Player healed and got back "+monsterAttack+" health!", 
                isPlayer: false
            });
          }
    },

    computed: {
        playerhealthStyle: function() {
            return {
              backgroundColor: "green",
              margin: 0,
              color: "white",
              width: this.playerHealth+"%"
            }
          },
          
          monsterhealthStyle: function() {
            return {
              backgroundColor: "green",
              margin: 0,
              color: "white",
              width: this.monsterHealth+"%"
            }
          },

          classObject: function () {
            
            this.monsterAttack = !this.monsterAttack;

            return {
            'player-turn': !this.monsterAttack,
            'monster-turn': this.monsterAttack
            }
          }
    },

    watch: {
        monsterHealth: function(newValue, oldValue) {
            
            var vm = this;
            
            if (vm.monsterHealth <= 0) {
                alert("The monster has been defeated!!!!");
                vm.startGame();
            }
            
        },

        playerHealth: function() {
            
            var vm = this;
            
            if (vm.playerHealth <= 0) {
                alert("You died bro!!!!");
                vm.startGame();
            }
            
        },

    }
    
  });
  
  
  
      