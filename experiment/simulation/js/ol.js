var mtr=0;
var opOn=[],opOff=[],aOn,aOff,ledOn=[],ledOff=[],k=0,j=0,arrowOn=[],arrowOff=[],justBlinkOff=[],justBlinkOn=[];
var aOn=[],aOff=[];var startCondition=0,stopCondition=0;
var running1=false,running2=false,running3=false;
function startMotor(id)
{
	if(id=="start1" && !running1 && !running2 && !running3) startCondition=11; /*start1*/
	if(id=="start2" && running1 && !running2 && !running3) startCondition=12; /*start1 && start2*/
	if(id=="start3" && running1 && !running2 && !running3) startCondition=13; /*start1 && start3*/
	
	if(id=="start2" && !running1 && !running2 && !running3) startCondition=21; /*start2*/
	if(id=="start1" && !running1 && running2 && !running3) startCondition=22; /*start2 && start1*/
	if(id=="start3" && !running1 && running2 && !running3) startCondition=23; /*start2 && start3*/
	
	if(id=="start3" && !running1 && !running2 && !running3) startCondition=31; /*start3*/
	if(id=="start1" && !running1 && !running2 && running3) startCondition=32; /*start3 && start1*/
	if(id=="start2" && !running1 && !running2 && running3) startCondition=33; /*start3 && start2*/

	if(mtr<2)
	{
		mtr++;
		switch(startCondition)
		{
		case 11:running1=true;
				running2=false;
				running3=false;
				opOn=[1,2]; opOff=[3,4,5,6];
				ledOn=[1]; ledOff=[2,3];
				aOn=[1,3,5,6,7,9,10,13,18,19,20];
				aOff=[4,8,11,12,14,15,16,17,21,22,23,24];
				justBlinkOff=[2];
				arrowOn=[1]; arrowOff=[2,3];
				document.getElementById("stop1").disabled=false;
			break;
		case 12:running1=true;
				running2=true;
				running3=false;
				opOn=[1,2,3,4]; opOff=[5,6];
				ledOn=[1,2]; ledOff=[3];
				aOn=[1,5,6,7,9,10,11,13,16,19,20,21,22];
				aOff=[3,4,12,14,15,17,18,23,24];
				justBlinkOff=[2,8];
				arrowOn=[1,2]; arrowOff=[3];
				document.getElementById("stop1").disabled=false;
				document.getElementById("stop2").disabled=false;
			break;
		case 13:running3=true;
				running1=true;
				running2=false;
				opOn=[1,2,5,6]; opOff=[3,4];
				ledOn=[1,3]; ledOff=[2];
				aOn=[1,3,4,5,7,10,13,17,18,19,20,23,24];
				aOff=[6,8,9,11,12,15,16,21,22];
				justBlinkOff=[2,14];
				arrowOn=[1,3]; arrowOff=[2];
				document.getElementById("stop1").disabled=false;
				document.getElementById("stop3").disabled=false;
			break;
		case 21:running1=false;
				running3=false;
				running2=true;
				opOn=[3,4]; opOff=[1,2,5,6];
				ledOn=[2]; ledOff=[1,3]; 
				aOn=[1,6,7,9,11,12,13,15,16,21,22];
				aOff=[2,3,4,5,10,14,17,18,19,20,23,24];
				justBlinkOff=[8];
				arrowOn=[2]; arrowOff=[1,3];
				document.getElementById("stop2").disabled=false;
			break;
		case 22: running1=true;
				running2=true;
				running3=false;
				opOn=[1,2,3,4]; opOff=[5,6];
				ledOn=[1,2]; ledOff=[3]; 
				aOn=[1,5,6,7,9,10,11,13,16,19,20,21,22];
				aOff=[3,4,12,14,15,17,18,23,24];
				justBlinkOff=[2,8];
				arrowOn=[1,2]; arrowOff=[3];
				document.getElementById("stop1").disabled=false;
				document.getElementById("stop2").disabled=false;
			break;
		case 23:running1=false;
				running2=true;
				running3=true;
				opOn=[3,4,5,6]; opOff=[1,2];
				ledOn=[2,3]; ledOff=[1];   
				aOn=[1,4,7,11,12,13,15,16,17,21,22,23,24];
				aOff=[2,3,5,6,9,10,18,19,20];
				justBlinkOff=[8,14];
				arrowOn=[2,3]; arrowOff=[1];
				document.getElementById("stop3").disabled=false;
				document.getElementById("stop2").disabled=false;
			break;
		case 31:running3=true;
				running2=false;
				running1=false;
				opOn=[5,6]; opOff=[1,2,3,4];
				ledOn=[3]; ledOff=[1,2]; 
				aOn=[1,3,4,7,12,13,15,17,18,23,24];
				aOff=[2,5,6,8,9,10,11,16,19,20,21,22];
				justBlinkOff=[14];
				arrowOn=[3]; arrowOff=[1,2];
				document.getElementById("stop3").disabled=false;
			break;
		case 32:running3=true;
				running1=true;
				running2=false;
				opOn=[1,2,5,6]; opOff=[3,4];
				ledOn=[1,3]; ledOff=[2];
				aOn=[1,3,4,5,7,10,13,17,18,19,20,23,24];
				aOff=[6,8,9,11,12,15,16,21,22];
				justBlinkOff=[2,14];
				arrowOn=[1,3]; arrowOff=[2];
				document.getElementById("stop1").disabled=false;
				document.getElementById("stop3").disabled=false;
			break;
		case 33:running1=false;
				running2=true;
				running3=true;
				opOn=[3,4,5,6]; opOff=[1,2];
				ledOn=[2,3]; ledOff=[1];  
				aOn=[1,4,7,11,12,13,15,16,17,21,22,23,24];
				aOff=[2,3,5,6,9,10,18,19,20];
				justBlinkOff=[8,14];
				arrowOn=[2,3]; arrowOff=[1];
				document.getElementById("stop3").disabled=false;
				document.getElementById("stop2").disabled=false;
			break;
		}
	}
	startSimultaneousMtrs(aOn,aOff,ledOn,ledOff,opOn,opOff,justBlinkOff,arrowOn,arrowOff);
}

function startSimultaneousMtrs(aOn,aOff,ledOn,ledOff,opOn,opOff,justBlinkOff,arrowOn,arrowOff)
{
	displayOutput(opOn,opOff);
	glowMtrLed(ledOn,ledOff);
	displayCircuitInstruction(aOn,aOff);
	rotateArrowOn(arrowOn,arrowOff);
	blink(justBlinkOff);
}

function stopMotor(id)
{
	if(id=="stop1" && running1 && !running2 && !running3) stopCondition=101; /*stop1*/
	if(id=="stop1" && running1 && running2 && !running3) stopCondition=102; /*stop1 clicked && mtr1 & mtr2 running*/
	if(id=="stop1" && running1 && !running2 && running3) stopCondition=103; /*stop1 clicked && mtr1 & mtr3 running*/
	
	if(id=="stop2" && !running1 && running2 && !running3) stopCondition=201; /*stop2*/
	if(id=="stop2" && running1 && running2 && !running3) stopCondition=202; /*stop2 clicked && mtr1 & mtr2 running*/
	if(id=="stop2" && !running1 && running2 && running3) stopCondition=203; /*stop2 clicked && mtr3 & mtr2 running*/
	
	if(id=="stop3" && !running1 && !running2 && running3) stopCondition=301; /*stop3*/
	if(id=="stop3" && running1 && !running2 && running3) stopCondition=302; /*stop3 clicked && mtr1 & mtr3 running*/
	if(id=="stop3" && !running1 && running2 && running3) stopCondition=303; /*stop3 clicked && mtr2 & mtr3 running*/
	
	switch(stopCondition)
	{
		case 101:running1=false;
				 opOn=[]; opOff=[1,2,3,4,5,6]; 
				 ledOn=[]; ledOff=[1,2,3];   
				 aOn=[3,6,7,9,12,13,15,18];
				 aOff=[2,4,5,8,10,11,14,16,17,19,20,21,22,23,24];
				 justBlinkOn=[1]; justBlinkOff=[];
				 arrowOn=[];arrowOff=[1,2,3];
				 document.getElementById("stop1").disabled=true;
		break;		 
		case 102:running1=false;
				 opOn=[3,4]; opOff=[1,2,5,6]; 
				 ledOn=[2]; ledOff=[1,3];
				 aOn=[6,7,9,11,12,13,15,16,21,22];
				 aOff=[2,3,4,5,10,14,17,18,19,20,23,24];
				 justBlinkOn=[1]; justBlinkOff=[8];
				 arrowOn=[2];arrowOff=[1,3];
				 document.getElementById("stop1").disabled="true";
		break;
		case 103:running1=false;
				 opOn=[5,6]; opOff=[1,2,3,4]; 
				 ledOn=[3]; ledOff=[1,2];
				 aOn=[3,4,7,12,13,15,17,18,23,24];
				 aOff=[2,5,6,8,9,10,11,16,19,20,21,22];
				 justBlinkOn=[1]; justBlinkOff=[14];
				 arrowOn=[3];arrowOff=[1,2];
				 document.getElementById("stop1").disabled="true";
		break;		 
		case 201:running2=false;
				 opOn=[]; opOff=[1,2,3,4,5,6]; 
				 ledOn=[]; ledOff=[1,2,3];
				 aOn=[1,3,6,9,12,13,15,18];
				 aOff=[2,4,5,8,10,11,14,16,17,19,20,21,22,23,24];
				 justBlinkOn=[7]; justBlinkOff=[];
				 arrowOn=[];arrowOff=[1,2,3];
				 document.getElementById("stop2").disabled=true;
		break;		 
		case 202:running2=false;
				 opOn=[1,2]; opOff=[3,4,5,6]; 
				 ledOn=[1]; ledOff=[2,3];
				 aOn=[1,3,5,6,9,10,13,18,19,20];
				 aOff=[4,8,11,12,14,15,16,17,21,22,23,24];
				 justBlinkOn=[7]; justBlinkOff=[2];
				 arrowOn=[1];arrowOff=[2,3];
				 document.getElementById("stop2").disabled="true";
		break;
		case 203:running2=false;
				 opOn=[5,6]; opOff=[1,2,3,4]; 
				 ledOn=[3]; ledOff=[1,2];
				 aOn=[1,3,4,12,13,15,17,18,23,24];
				 aOff=[2,5,6,8,9,10,11,16,19,20,21,22];
				 justBlinkOn=[7]; justBlinkOff=[14];
				 arrowOn=[3];arrowOff=[1,2];
				 document.getElementById("stop2").disabled="true";
		break;	
		case 301:running3=false;
				 opOn=[]; opOff=[1,2,3,4,5,6]; 
				 ledOn=[]; ledOff=[1,2,3];
				 aOn=[1,3,6,7,9,12,15,18];
				 aOff=[2,4,5,8,10,11,14,16,17,19,20,21,22,23,24];
				 justBlinkOn=[13]; justBlinkOff=[];
				 arrowOn=[];arrowOff=[1,2,3];
				 document.getElementById("stop3").disabled=true;
		break;	 
		case 302:running3=false;
				 opOn=[1,2]; opOff=[3,4,5,6]; 
				 ledOn=[1]; ledOff=[2,3];
				 aOn=[1,3,5,6,7,9,10,18,19,20];
				 aOff=[4,8,11,12,14,15,16,17,21,22,23,24];
				 justBlinkOn=[13]; justBlinkOff=[2];
				 arrowOn=[1];arrowOff=[2,3];
				 document.getElementById("stop3").disabled="true";
		break;
		case 303:running3=false;
				 opOn=[3,4]; opOff=[1,2,5,6]; 
				 ledOn=[2]; ledOff=[1,3];
				 aOn=[1,6,7,9,11,12,15,16,21,22];
				 aOff=[2,3,4,5,10,14,17,18,19,20,23,24];
				 justBlinkOn=[13]; justBlinkOff=[8];
				 arrowOn=[2]; arrowOff=[1,3];
				 document.getElementById("stop3").disabled="true";
		break;
	}
	stopSimultaneousMtrs(aOn,aOff,ledOn,ledOff,opOn,opOff,justBlinkOff,arrowOn,arrowOff);
}

function stopSimultaneousMtrs(aOn,aOff,ledOn,ledOff,opOn,opOff,justBlinkOff,arrowOn,arrowOff)
{
	mtr--;
	displayOutput(opOn,opOff);
	glowMtrLed(ledOn,ledOff);
	displayCircuitInstruction(aOn,aOff);
	rotateArrowOn(arrowOn,arrowOff);
	blink(justBlinkOff);
	blinkOn(justBlinkOn);
}

function displayOutput(opOn,opOff)
{
	for(i=0;i<opOn.length;i++)
	{
		document.getElementById("op"+opOn[i]).style.visibility="visible";
	}
	for(i=0;i<opOff.length;i++)
	{
		document.getElementById("op"+opOff[i]).style.visibility="hidden";
	}
}

function glowMtrLed(ledOn,ledOff)
{
	for(i=0;i<ledOn.length;i++)
	{
		document.getElementById("mtr"+ledOn[i]).style.visibility="visible";
	}
	for(i=0;i<ledOff.length;i++)
	{
		document.getElementById("mtr"+ledOff[i]).style.visibility="hidden";
	}
}

function displayCircuitInstruction(aOn,aOff)
{
	for(i=0;i<aOn.length;i++)
	{
		document.getElementById("bit"+aOn[i]).style.backgroundColor="#00AC00";
	}
	for(i=0;i<aOff.length;i++)
	{
		document.getElementById("bit"+aOff[i]).style.backgroundColor="#FF0000";
	}
}

function rotateArrowOn(arrowOn,arrowOff)
{
	for(i=0;i<arrowOn.length;i++)
	{
		document.getElementById("arrow"+arrowOn[i]).style.visibility="visible";
		document.getElementById("arrow"+arrowOn[i]).style.transformOrigin="center";
		document.getElementById("arrow"+arrowOn[i]).style.animation="rotate 1.15s linear infinite";
	}
	for(i=0;i<arrowOff.length;i++)
	{
		document.getElementById("arrow"+arrowOff[i]).style.visibility="hidden";
		document.getElementById("arrow"+arrowOff[i]).style.transformOrigin="";
		document.getElementById("arrow"+arrowOff[i]).style.animation="";
	}
}

function rotateArrowOff(arrowOff)
{
	for(i=0;i<arrowOff.length;i++)
	{
		document.getElementById("arrow"+arrowOff[i]).style.visibility="hidden";
		document.getElementById("arrow"+arrowOff[i]).style.transformOrigin="";
		document.getElementById("arrow"+arrowOff[i]).style.animation="";
	}
}

function blink(justBlinkOff)
{
	for(i=0;i<justBlinkOff.length;i++)
	{
		document.getElementById("bit"+justBlinkOff[i]).style.backgroundColor="#00AC00";
		stopBlinking(justBlinkOff[i]);
	}
}

function stopBlinking(i)
{
	setTimeout(function()
	{
		document.getElementById("bit"+i).style.backgroundColor="#FF0000";
	},750);
}

function blinkOn(justBlinkOn)
{
	for(i=0;i<justBlinkOn.length;i++)
	{
		document.getElementById("bit"+justBlinkOn[i]).style.backgroundColor="#FF0000";
		stopBlinkingOn(justBlinkOn[i]);
	}
}

function stopBlinkingOn(i)
{
	setTimeout(function()
	{
		document.getElementById("bit"+i).style.backgroundColor="#00AC00";
	},750);
}