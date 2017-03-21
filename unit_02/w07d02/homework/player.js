console.log('player file is loaded');

var player = {
  name: "Neo",
  feedTamagotchi: function(tamagotchi) {
    tamagotchi.foodInTummy++;
    console.log('YUM!!! ' + tamagotchi.name + ' has been fed and now has: ' + tamagotchi.foodInTummy + ' in the tummy');
  },
  medicateTamagotchi: function(tamagotchi) {
    tamagotchi.health++;
    console.log(tamagotchi.name + ' has been medicated and now has health: ' + tamagotchi.health);
  },
  knockOutTamagotchi: function(tamagotchi) {
    tamagotchi.restedness++;
    console.log(tamagotchi.name + ' got some Zzzzs! Restedness: ' + tamagotchi.restedness);
  }
}; //end player

player.feedTamagotchi(carla);
player.medicateTamagotchi(carla);
player.knockOutTamagotchi(carla);

player.feedTamagotchi(james);
player.medicateTamagotchi(james);
player.knockOutTamagotchi(james);

player.feedTamagotchi(mike);
player.medicateTamagotchi(mike);
player.knockOutTamagotchi(mike);

player.feedTamagotchi(sara);
player.medicateTamagotchi(sara);
player.knockOutTamagotchi(sara);

player.feedTamagotchi(bill);
player.medicateTamagotchi(bill);
player.knockOutTamagotchi(bill);

player.feedTamagotchi(josh);
player.medicateTamagotchi(josh);
player.knockOutTamagotchi(josh);
