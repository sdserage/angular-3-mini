angular.module('fourWheels').component('cars',{
  templateUrl: 'app/cars/cars.template.html',
  controllerAs: 'carsCtrl',
  controller: function(carsSrvc){
    this.cars = carsSrvc.cars;
    this.buyCar = id => {
      carsSrvc.buyCar(id);
      this.cars = carsSrvc.cars;
    }
  }
});
