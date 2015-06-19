/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'sym-logo'
   (function(symbolName) {   
   
   })("sym-logo");
   //Edge symbol end:'sym-logo'

   //=========================================================
   
   //Edge symbol: 'sym-1_7'
   (function(symbolName) {   
   
   })("sym-8");
   //Edge symbol end:'sym-8'

   //=========================================================
   
   //Edge symbol: 'sym-page2-popup_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${sym-page2-popup-close}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("sym-page4-popup");
   //Edge symbol end:'sym-page4-popup'

   //=========================================================
   
   //Edge symbol: 'sym-1_5'
   (function(symbolName) {   
   
   })("sym-6");
   //Edge symbol end:'sym-6'

   //=========================================================
   
   //Edge symbol: 'sym-1_8'
   (function(symbolName) {   
   
   })("sym-9");
   //Edge symbol end:'sym-9'

   //=========================================================
   
   //Edge symbol: 'sym-page2-button_1'
   (function(symbolName) {   
   
   })("sym-page5-button");
   //Edge symbol end:'sym-page5-button'

   //=========================================================
   
   //Edge symbol: 'sym-1'
   (function(symbolName) {   
   
   })("sym-1");
   //Edge symbol end:'sym-1'

   //=========================================================
   
   //Edge symbol: 'sym-page2-button_1'
   (function(symbolName) {   
   
      })("sym-page6-button");
   //Edge symbol end:'sym-page6-button'

   //=========================================================
   
   //Edge symbol: 'sym-1_4'
   (function(symbolName) {   
   
   })("sym-5");
   //Edge symbol end:'sym-5'

   //=========================================================
   
   //Edge symbol: 'sym-page2-popup_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${sym-page2-popup-close}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.getSymbolElement().hide();
         

      });
         //Edge binding end

      })("sym-page6-popup");
   //Edge symbol end:'sym-page6-popup'

   //=========================================================
   
   //Edge symbol: 'sym-page3-button'
   (function(symbolName) {   
   
   })("sym-page3-button");
   //Edge symbol end:'sym-page3-button'

   //=========================================================
   
   //Edge symbol: 'sym-1_1'
   (function(symbolName) {   
   
   })("sym-2");
   //Edge symbol end:'sym-2'

   //=========================================================
   
   //Edge symbol: 'sym-page6'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${sym-page6-button}", "click", function(sym, e) {
         
         // Show an element 
         sym.$("sym-page6-popup").show();

      });
      //Edge binding end

   })("sym-page6");
   //Edge symbol end:'sym-page6'

   //=========================================================
   
   //Edge symbol: 'sym-page5'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${sym-page5-button}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.$("sym-page5-popup").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34000, function(sym, e) {
         sym.stop();
         sym.$("page5")[0].pause();
         sym.getSymbolElement().hide();
         
         sym.getComposition().getStage().$("sym-page6").show();
         sym.getComposition().getStage().getSymbol("sym-page6").play("page6-playpoint");

      });
      //Edge binding end

   })("sym-page5");
   //Edge symbol end:'sym-page5'

   //=========================================================
   
   //Edge symbol: 'sym-page4-popup_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${sym-page2-popup-close}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.getSymbolElement().hide();
         

      });
         //Edge binding end

      })("sym-page5-popup");
   //Edge symbol end:'sym-page5-popup'

   //=========================================================
   
   //Edge symbol: 'sym-1_9'
   (function(symbolName) {   
   
   })("sym-10");
   //Edge symbol end:'sym-10'

   //=========================================================
   
   //Edge symbol: 'sym-1_6'
   (function(symbolName) {   
   
   })("sym-7");
   //Edge symbol end:'sym-7'

   //=========================================================
   
   //Edge symbol: 'sym-page4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${sym-page4-button}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.$("sym-page4-popup").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         
         // Show an element 
         
         // Hide an element 
         sym.stop();
         sym.$("page4")[0].pause();
         sym.getSymbolElement().hide();
         
         sym.getComposition().getStage().$("sym-page5").show();
         sym.getComposition().getStage().getSymbol("sym-page5").play("page5-playpoint");

      });
      //Edge binding end

   })("sym-page4");
   //Edge symbol end:'sym-page4'

   //=========================================================
   
   //Edge symbol: 'sym-page2-button_1'
   (function(symbolName) {   
   
   })("sym-page4-button");
   //Edge symbol end:'sym-page4-button'

   //=========================================================
   
   //Edge symbol: 'sym-1_3'
   (function(symbolName) {   
   
   })("sym-4");
   //Edge symbol end:'sym-4'

   //=========================================================
   
   //Edge symbol: 'sym-page2-popup-close'
   (function(symbolName) {   
   
   })("sym-page2-popup-close");
   //Edge symbol end:'sym-page2-popup-close'

   //=========================================================
   
   //Edge symbol: 'sym-1_2'
   (function(symbolName) {   
   
   })("sym-3");
   //Edge symbol end:'sym-3'

   //=========================================================
   
   //Edge symbol: 'sym-page3'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         var intNumber = 0;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sym-1}", "click", function(sym, e) {
         for(i=1;i<=10;i++){
         	sym.getSymbol("sym-"+i+"").$("RoundRect4").css("background-color","#bfeffb");
         	sym.getSymbol("sym-"+i+"").$("Text11").css("color","#000");
         }
         sym.getSymbol("sym-1").$("RoundRect4").css("background-color","#0022f2");
         sym.getSymbol("sym-1").$("Text11").css("color","#FFF");
         
         intNumber = 1;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sym-2}", "click", function(sym, e) {
         for(i=1;i<=10;i++){
         	sym.getSymbol("sym-"+i+"").$("RoundRect4").css("background-color","#bfeffb");
         	sym.getSymbol("sym-"+i+"").$("Text11").css("color","#000");
         }
         sym.getSymbol("sym-2").$("RoundRect4").css("background-color","#0022f2");
         sym.getSymbol("sym-2").$("Text11").css("color","#FFF");
         
         intNumber = 2;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sym-3}", "click", function(sym, e) {
         for(i=1;i<=10;i++){
         	sym.getSymbol("sym-"+i+"").$("RoundRect4").css("background-color","#bfeffb");
         	sym.getSymbol("sym-"+i+"").$("Text11").css("color","#000");
         }
         sym.getSymbol("sym-3").$("RoundRect4").css("background-color","#0022f2");
         sym.getSymbol("sym-3").$("Text11").css("color","#FFF");
         
         intNumber = 3;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sym-4}", "click", function(sym, e) {
         for(i=1;i<=10;i++){
         	sym.getSymbol("sym-"+i+"").$("RoundRect4").css("background-color","#bfeffb");
         	sym.getSymbol("sym-"+i+"").$("Text11").css("color","#000");
         }
         sym.getSymbol("sym-4").$("RoundRect4").css("background-color","#0022f2");
         sym.getSymbol("sym-4").$("Text11").css("color","#FFF");
         
         intNumber = 4;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sym-5}", "click", function(sym, e) {
         for(i=1;i<=10;i++){
         	sym.getSymbol("sym-"+i+"").$("RoundRect4").css("background-color","#bfeffb");
         	sym.getSymbol("sym-"+i+"").$("Text11").css("color","#000");
         }
         sym.getSymbol("sym-5").$("RoundRect4").css("background-color","#0022f2");
         sym.getSymbol("sym-5").$("Text11").css("color","#FFF");
         
         intNumber = 5;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sym-6}", "click", function(sym, e) {
         for(i=1;i<=10;i++){
         	sym.getSymbol("sym-"+i+"").$("RoundRect4").css("background-color","#bfeffb");
         	sym.getSymbol("sym-"+i+"").$("Text11").css("color","#000");
         }
         sym.getSymbol("sym-6").$("RoundRect4").css("background-color","#0022f2");
         sym.getSymbol("sym-6").$("Text11").css("color","#FFF");
         
         intNumber = 6;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sym-7}", "click", function(sym, e) {
         for(i=1;i<=10;i++){
         	sym.getSymbol("sym-"+i+"").$("RoundRect4").css("background-color","#bfeffb");
         	sym.getSymbol("sym-"+i+"").$("Text11").css("color","#000");
         }
         sym.getSymbol("sym-7").$("RoundRect4").css("background-color","#0022f2");
         sym.getSymbol("sym-7").$("Text11").css("color","#FFF");
         
         intNumber = 7;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sym-8}", "click", function(sym, e) {
         for(i=1;i<=10;i++){
         	sym.getSymbol("sym-"+i+"").$("RoundRect4").css("background-color","#bfeffb");
         	sym.getSymbol("sym-"+i+"").$("Text11").css("color","#000");
         }
         sym.getSymbol("sym-8").$("RoundRect4").css("background-color","#0022f2");
         sym.getSymbol("sym-8").$("Text11").css("color","#FFF");
         
         intNumber = 8;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sym-9}", "click", function(sym, e) {
         for(i=1;i<=10;i++){
         	sym.getSymbol("sym-"+i+"").$("RoundRect4").css("background-color","#bfeffb");
         	sym.getSymbol("sym-"+i+"").$("Text11").css("color","#000");
         }
         sym.getSymbol("sym-9").$("RoundRect4").css("background-color","#0022f2");
         sym.getSymbol("sym-9").$("Text11").css("color","#FFF");
         
         intNumber = 9;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sym-10}", "click", function(sym, e) {
         for(i=1;i<=10;i++){
         	sym.getSymbol("sym-"+i+"").$("RoundRect4").css("background-color","#bfeffb");
         	sym.getSymbol("sym-"+i+"").$("Text11").css("color","#000");
         }
         sym.getSymbol("sym-10").$("RoundRect4").css("background-color","#0022f2");
         sym.getSymbol("sym-10").$("Text11").css("color","#FFF");
         
         intNumber = 10;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sym-page3-button}", "click", function(sym, e) {
         if(intNumber >= 1){
         	sym.stop();
         	sym.$("page3")[0].pause();
         	sym.getSymbolElement().hide();
         
         	sym.getComposition().getStage().$("sym-page4").show();
         	sym.getComposition().getStage().getSymbol("sym-page4").play("play-point");
         
         }

      });
      //Edge binding end

   })("sym-page3");
   //Edge symbol end:'sym-page3'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-191161658");