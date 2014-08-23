
var	thats = [],rid = false,
		raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame,
		caf = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame;

function caller(ts){
	var t,t0;
	
	aRegister(this);
	
	if(!this._t0){
		this._t0 = ts;
		this._tp = t = 0;
	}else t = ts - this._t0 - this._toff;
	
	if(this._tpa){
		var inc = t - this._tpa;
		
		this._toff += inc;
		t -= inc;
		
		this._tpa = 0;
	}
	
	t0 = this._tp;
	this._tp = t;
	this._f(t,t0);
}

function aCaller(ts){
	var Thats = thats;
	
	thats = [];
	rid = false;
	
	for(var i = 0;i < Thats.length;i++) caller.call(Thats[i],ts);
}

function aRegister(that){
	if(!rid) rid = raf(aCaller);
	
	var i = thats.indexOf(that);
	if(i != -1) return;
	
	thats.push(that);
}

function aUnregister(that){
	var i = thats.indexOf(that);
	if(i != -1) thats.splice(i,1);
}

module.exports = function(f){
	
	Object.defineProperties(this,{
		_t0: 		{value: 0, writable: true},
		_tp:		{value: 0, writable: true},
		_tpa:		{value: 0, writable: true},
		_toff:	{value: 0, writable: true},
		_f:			{value: f}
	});
	
	return this;
};

module.exports.prototype.start = function(){
	aRegister(this);
};

module.exports.prototype.stop = function(){
	this._t0 = 0;
	this._tp = 0;
	this._tpa = 0;
	this._toff = 0;
	
	aUnregister(this);
};

module.exports.prototype.restart = function(){
	this.stop();
	this.start();
};

module.exports.prototype.pause = function(){
	this._tpa = this._tp;
	
	aUnregister(this);
};

