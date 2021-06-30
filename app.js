const team = {
    _players : [{
      firstName : "Pablo",
      lastName: "Sanchez",
      age: 11
    },
    {
      firstName: "Zacch",
      lastName: "Napou",
      age: 14
    },
    {
      firstname: "Fred",
      lastName: "Jack",
      age: 17
    }],
    _games : [{
      opponent: "Koln",
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: "Dortmund",
      teamPoints: 25,
      opponentPoints: 32
    },
    {
      opponent: "Chelsea",
      teamPoints: 56,
      opponentPoints: 41
    }],
    get players(){
      return this._players
    },
    get games(){
      return this._games
    },
  
    addPlayer(firstName,lastName,age){
      const player = {
        firstName : firstName,
        lastName: lastName,
        age: age
      };
      return this.players.push(player)
    },
     addGame(opponentName,points,oppPoints){
      const game = {
        opponent : opponentName, //right assigning coming from parameter
        teamPoints: points,
        opponentPoints: oppPoints
      };
      return this.games.push(game);
    }
  }
  
  team.addPlayer("Steph", "Curry", 28)
  team.addPlayer("Lisa", "Leslie", 44)
  team.addPlayer("Bugs", "Bunny", 76)
  console.log(team.players)
  
  team.addGame("Liverpool", 25, 36)
  team.addGame("Villa", 15, 52)
  team.addGame("Brighton", 58, 65)
  console.log(team.games)
  