"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var AppointmentService = (function () {
    function AppointmentService(http) {
        this.http = http;
    }
    AppointmentService.prototype.getInfo = function () {
        return this.http.get('./assets/appointment.json')
            .map(function (res) { return res.json(); }) // TODO: map to Apppointement
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    return AppointmentService;
}());
AppointmentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AppointmentService);
exports.AppointmentService = AppointmentService;
var Appointment = (function () {
    function Appointment() {
    }
    return Appointment;
}());
exports.Appointment = Appointment;
//# sourceMappingURL=appointment.service.js.map