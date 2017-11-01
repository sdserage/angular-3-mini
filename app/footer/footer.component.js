angular.module('fourWheels', []).component('footer', {
  templateUrl: 'app/footer/footer.template.html',
  controllerAs: 'footerCtrl',
  controller: () => {
    this.name = '';
    this.email = '';
    this.contacted = false;
    this.contact = () => {
      this.name = '';
      this.email = '';
      this.contacted = true;
    };
  }
});
