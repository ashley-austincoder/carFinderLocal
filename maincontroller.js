app.controller("MainController", function($scope){

  $scope.submittedSurvey = false;
  $scope.makeAppointment = false;
  $scope.preferences = {};
  $scope.testDriveSelection = null;
  $scope.submitSurvey = function(){
    var userQuery = {
      segment: $("#segment").val(),
      budget: $("#budget").val(),
      gas: $("#gas").val(),
      passengers: $("#passengers").val(),
      color: $("#color").val()
    }
    this.preferences = userQuery;
    this.submittedSurvey = true;
    console.log("finding vehicles for you that match ", userQuery);
    //TODO: Make ajax call with this to get vehicles
  }
  $scope.openModal = function(id){
    debugger;
    this.testDriveSelection = this.vehicles.filter(function(v){
      if(v.id = id) return true;
    })[0];
    var desc = "Test drive our " + this.testDriveSelection.year + " " + this.testDriveSelection.make + " " + this.testDriveSelection.model;
    $("#drive-selection").val(desc);
    $("#appt-modal").modal("show");
  }

  $scope.vehicles = [
    {
      id: 1,
      make: "Honda",
      model: "Civic",
      year: 2015,
      price: 18000,
      odometer: 30000,
      reliability: 99,
      safety: 95,
      handling: 85,
      kids:false,
      dvd:false,
      pets:true,
      gas: true
    },
    {
      id: 2,
      make: "Chevy",
      model: "SUV",
      year: 2014,
      price: 18000,
      odometer: 30000,
      reliability: 95,
      safety: 94,
      handling: 88,
      kids:true,
      dvd:true,
      pets:true,
      gas: false
    },
    {
      id: 3,
      make: "Ford",
      model: "F150",
      year: 2016,
      price: 25000,
      odometer:10000,
      reliability: 94,
      safety: 96,
      handling: 90,
      kids:true,
      pets:false,
      //high mpg = true
      gas: true
    }
  ]




});
