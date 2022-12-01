PennController.ResetPrefix(null);
PennController.AddHost("http://amor.cms.hu-berlin.de/~buchmueo/");
//PennController.DebugOff();


//main_draft


PennController.Sequence("intro","instructions","instructions2","uebung","testbeginn","picsquestions","finalfrageboegen","questionnaire1_1","questionnaire1_2","FourFactors","send","final");


PennController("intro",
        newHtml("intro", "infoeinverst_main.html")
            .print()
        ,
        newButton("weiter1", "Best&auml;tigen")
        .print()
        .wait(
        getHtml("intro").test.complete()
            .failure( getHtml("intro").warn())
            ));
            
PennController("instructions",
        newHtml("instructions", "instructions.html")
        .print()
        ,
        newButton("weiter2", "Weiter")
        .print()
        .wait(
            ));
            
PennController("instructions2",
        newHtml("instructions2", "grammatisch_akzeptabel.html")
            .print()
        ,
        newButton("weiter3", "Zur &Uuml;bung")
        .print()
        .wait(
            ));

///////////////////////////////////////////////////////////////////////////////////uebung/////////////////////////////////////////////////////////

PennController("uebung",

        newText("Danke","Vielen Dank! Wenn du jetzt auf 'Start &Uuml;bung' klickst, beginnt die &Uuml;bung. Danach beginnt die eigentliche Studie.")
            .print()
        ,
        newCanvas("88", 1, 40)
            .print()
        ,
        newButton("Start &Uuml;bung")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        getText("Danke")
        .remove()
        ,
        newTimer("break1", 1000)
            .start()
            .wait()
        ,
        newImage("uebung_bild.jpg")
            .settings.size("20%")
            .settings.center()
            .print()
        ,
        newTimer("break2", 2000)
            .start()
            .wait()
        ,
        newAudio("uebungmp3", "uebung_regenjacke.mp3")
            .play()
            .wait("first")
        ,
        newTimer("break3", 1000)
            .start()
            .wait()
        ,
        newCanvas("89", 1, 10)
            .print()
        ,
        newText("uebung_grammatisch","Wie grammatisch korrekt findest du den Satz?")
            .print()
            .settings.center()
        ,
        newCanvas("90", 1, 10)
            .print()
        ,
        newScale("uebung_grammatisch","1", "2", "3", "4", "5", "6","7")
            .settings.labelsPosition("bottom")
            .settings.before(newText("gar nicht", "gar nicht") )
            .settings.after(newText("sehr", "sehr")   ) 
            .settings.center()
            .print()
            .wait()
            .remove("uebung_grammatisch")
        ,
        getText("uebung_grammatisch")
        .remove()
        ,
        getCanvas("90")
        .remove()
        ,
        newTimer("break4", 1000)
            .start()
            .wait()
        ,
        newText("uebung_selfuse","Wie wahrscheinlich ist es, dass du den Satz selbst so formulierst?")
            .print()
            .settings.center()
        ,
        newCanvas("92", 1, 10)
            .print()
        ,
        newScale("uebung_selfuse","1", "2", "3", "4", "5", "6","7")
            .settings.labelsPosition("bottom")
            .settings.before(newText("gar nicht", "gar nicht") )
            .settings.after(newText("sehr", "sehr")   ) 
            .settings.center()
            .print()
            .wait()
            .remove("uebung_selfuse")
        ,
        getText("uebung_selfuse")
        .remove()
        ,
        getCanvas("92")
        .remove
        ,
         newTimer("break5", 1000)
            .start()
            .wait()
        ,
        newText("uebung_akzeptabel","Wie akzeptabel findest du den Satz, wenn die abgebildete Person ihn sagt?")
            .print()
            .settings.center()
        ,
        newCanvas("91", 1, 10)
            .print()
        ,
        newScale("uebung_akzeptabel","1", "2", "3", "4", "5", "6","7")
            .settings.labelsPosition("bottom")
            .settings.before(newText("gar nicht", "gar nicht") )
            .settings.after(newText("sehr", "sehr")   ) 
            .settings.center()
            .print()
            .wait()
            .remove("uebung_akzeptabel")
        ,
        getText("uebung_akzeptabel")
        .remove()
        ,
        getCanvas("91")
        .remove()
        )
        ;
        
//////////////////////////////////////////////////////////////////////////////////starttest///////////////////////////////////////////////////////

PennController("testbeginn",
        newText("Gut. Jetzt beginnt die eigentliche Studie. Schau dir bitte die Bilder genau an und konzentriere dich auf die gesprochenen S&auml;tze.")
            .print()
        ,
        newCanvas("93", 1, 40)
        .print()
        ,
        newButton("Start Test")
            .settings.center()
            .print()
            .wait()
            );
///////////////////////////////////////////////////////////////////////////////////main part//////////////////////////////////////////////////////
PennController.Template( "1_ob.CSV",
    variable => PennController("picsquestions",
    
        newTimer("break11", 1000)
            .start()
            .wait()
        ,
        newImage(variable.Context_picture_filename)
            .settings.size("40%")
            //.settings.css("transform","scale(0.2)")
            .settings.center()
            .print()
        ,
        newTimer("break12", 2000)
            .start()
            .wait()
        ,
        newAudio(variable.Target_sent_audio)
            .play()
            .wait("first")
        ,
        newTimer("break13", 1000)
            .start()
            .wait()
        ,
        newCanvas("94", 1, 10)
            .print()
        ,
        newText("grammatisch","Wie grammatisch korrekt findest du den Satz?")
            .print()
            .settings.center()
        ,
        newCanvas("95", 1, 10)
            .print()
        ,
        newScale("grammatisch","1", "2", "3", "4", "5", "6","7")
            .settings.labelsPosition("bottom")
            .settings.before(newText("gar nicht", "gar nicht") )
            .settings.after(newText("sehr", "sehr")   ) 
            .settings.center()
            .print()
            .wait()
            .settings.log("grammatisch")
            .remove("grammatisch")
        ,
        getText("grammatisch")
        .remove()
        ,
        getCanvas("95")
        .remove()
        ,
        newTimer("break14", 1000)
            .start()
            .wait()
        ,
        newText("selfuse","Wie wahrscheinlich ist es, dass du den Satz selbst so formulierst?")
            .print()
            .settings.center()
        ,
        newCanvas("97", 1, 10)
            .print()
        ,
        newScale("selfuse","1", "2", "3", "4", "5", "6","7")
            .settings.labelsPosition("bottom")
            .settings.before(newText("gar nicht", "gar nicht") )
            .settings.after(newText("sehr", "sehr")   ) 
            .settings.center()
            .print()
            .wait()
            .settings.log("selfuse")
            .remove("selfuse")
        ,
        getText("selfuse")
        .remove()
        ,
        getCanvas("97")
        .remove()
        ,
         newTimer("break14b", 1000)
            .start()
            .wait()
        ,
        newText("akzeptabel","Wie akzeptabel findest du den Satz, wenn die abgebildete Person ihn sagt?")
            .print()
            .settings.center()
        ,
        newCanvas("96", 1, 10)
            .print()
        ,
        newScale("akzeptabel","1", "2", "3", "4", "5", "6","7")
            .settings.labelsPosition("bottom")
            .settings.before(newText("gar nicht", "gar nicht") )
            .settings.after(newText("sehr", "sehr")   ) 
            .settings.center()
            .print()
            .wait()
            .settings.log("akzeptabel")
            .remove("akzeptabel")
        ,
        getText("akzeptabel")
        .remove()
        ,
        getCanvas("96")
        .remove()
        ,
        newTimer("break15", 1000)
            .start()
            .wait()
        ,
        newButton("Weiter")
            .settings.center()
            .print()
            .wait()
                
        )
                
    .log( "List", variable.List )
    .log( "Block", variable.Block )
    .log( "Item" , variable.Item )
    .log( "expSet" , variable.expSet )
    .log( "grammatically correct" , variable.grammatically_correct)
    .log( "condition" , variable.condition )
    .log( "WP1_match" , variable.WP1_match )
    .log( "WP2_tense" , variable.WP2_tense )
    .log( "SocStat_context", variable.SocStat_context )
    .log( "SocStat_contextVers", variable.SocStat_contextVers )
    .log( "SocStat_context_clarification", variable.SocStat_context_clarification)
    .log( "Context_picture_filename" , variable.Context_picture_filename )
    .log( "Group" , variable.Group )

);

//////////////////////////////////////////////////////////////////////////////////HinweisFrageboegen///////////////////////////////////////////////

PennController("finalfrageboegen",
    
    newText("Sehr gut. Ich bitte dich noch, die folgenden Frageb&ouml;gen auszuf&uuml;llen. Bitte scrolle nach oben, sobald der Fragebogen erscheint. Vielen Dank.")                 
        .print()  
    ,
    newCanvas("d55",1,40)
        .print()
    ,
    newButton("Zu den Frageb&ouml;gen") 
        .settings.center()
        .print()                            
        .wait()    
);

/////////////////////////////////////////////////////////////////////////////////Frageboegen////////////////////////////////////////////////////

PennController("questionnaire1_1",
        newText("<strong>Bitte erg&auml;nze die folgenden Informationen zu deiner Person.</strong>")
        .print()
        ,
        newCanvas("empty canvas 1", 1, 40)
            .print()
        ,
        newText("<strong>Bitte trage hier dein Geburtsdatum ein (tt/mm/jjjj).</strong>")
            .print()
        ,
        newCanvas("empty canvas 2", 1, 10)
            .print()
        ,
        newTextInput("Geburtsdatum")
            .print()
        ,
        getTextInput("Geburtsdatum").settings.log("final")
        ,
        newCanvas("empty canvas 3", 1, 40)
            .print()
        ,
        newText("Geschlecht","<strong>Welchem Geschlecht ordnest du dich zu?</strong>")
            .print()
        ,
        newCanvas("empty canvas 4", 1, 10)
            .print()
            ,
        newScale("Geschlecht","Weiblich","M&auml;nnlich","Divers")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Geschlecht")
        ,
        newCanvas("empty canvas 5", 1, 40)
            .print()
        ,
        newText("<strong>Welchen ethnischen Hintergrund hast du (kaukasisch, asiatisch...)?</strong>")
            .print()
        ,
        newCanvas("empty canvas 6", 1, 10)
            .print()
        ,
        newTextInput("Ethnie")
            .print()
        ,
        getTextInput("Ethnie").settings.log("final")
        ,
        newCanvas("empty canvas 7", 1, 40)
            .print()
        ,
        newText("<strong>Welchen Migrationshintergrund hast du (russisch, t&uuml;rkisch...)?</strong>")
            .print()
        ,
        newCanvas("empty canvas 8", 1, 10)
            .print()
        ,
        newTextInput("Migration")
            .print()
        ,
        getTextInput("Migration").settings.log("final")
        ,
        newCanvas("empty canvas 9", 1, 40)
            .print()
        ,
        newText("L1","<strong>Ist Deutsch die erste Sprache, die du gelernt hast?</strong>")
            .print()
        ,
        newCanvas("empty canvas 10", 1, 10)
            .print()
        ,
        newScale("L1_deutsch","Ja","Nein")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("L1_deutsch")
        ,
        newCanvas("empty canvas 11", 1, 40)
            .print()
        ,
        newText("L1","<strong>Hast du länger als sechs Monate in einem Land gelebt, in dem du eine andere Sprache als Deutsch in deinem allt&auml;glichen Leben gesprochen hast?  </strong>")
            .print()
        ,
        newCanvas("empty canvas 2", 1, 10)
            .print()
        ,
        newScale("L2","Ja","Nein")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("L2")
        ,
        newCanvas("empty canvas 12", 1, 40)
            .print()
        ,
        newText("<strong>Welche anderen Sprachen hast du gelernt – wann und wie lange?</strong>")
            .print()
        ,
        newCanvas("empty canvas 13", 1, 10)
            .print()
        ,
        newTextInput("L3")
            .print()
        ,
        getTextInput("L3").settings.log("final")
        ,
        newCanvas("empty canvas 14", 1, 40)
        .print()
        ,
        newText("3","<strong>Was ist dein h&ouml;chster Bildungsabschluss?</strong>")
            .print()
            ,
        newCanvas("empty canvas 14", 1, 10)
            .print()
            ,
        newScale("Bildungsabschluss","Unbekannt", "Weniger als die 8. Klasse", "Hauptschulabschluss einschließlich der 9. Klasse", "Realschulabschluss einschließlich der 10./11. Klasse","Abitur", "Bachelor", "Master")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Bildungsabschluss")
            ,
        newCanvas("empty canvas 15", 1, 40)
            .print()
        ,
        newText("<strong>Was ist dein derzeitiger Beruf? Wie lange arbeitest du in diesem Beruf?</strong>")
            .print()
        ,
        newCanvas("empty canvas 16", 1, 10)
            .print()
        ,
        newTextInput("Beruf_jetzt")
            .print()
            .settings.log("Beruf_jetzt")
        ,
        newCanvas("empty canvas 17", 1, 40)
            .print()
        ,
        newText("<strong>Wenn du für einige Zeit in einem anderen Beruf gearbeitet hast, als in dem jetzigen, welcher Beruf war das? Wann und wie lange hast du in diesem Beruf gearbeitet?</strong>")
            .print()
        ,
        newCanvas("empty canvas 18", 1, 10)
            .print()
        ,
        newTextInput("Beruf_vorher")
            .print()
        ,
        getTextInput("Beruf_vorher").settings.log("final")
        ,
        newCanvas("empty canvas 19", 1, 40)
            .print()
        ,
        newText("<strong>Was war dein Hauptberuf nach dem 18. Lebensjahr?</strong>")
            .print()
        ,
        newCanvas("empty canvas 2", 1, 10)
            .print()
        ,
        newTextInput("Hauptberuf_nach_18")
            .print()
        ,
        getTextInput("Hauptberuf_nach_18").settings.log("final")
        ,
        newCanvas("empty canvas 20", 1, 40)
            .print()
        ,
        newText("<strong>Mit welchen erziehungsberechtigten Personen hast du vor deinem 18. Geburtstag in einem Haushalt gelebt?<strong>")//h&ouml;chster Bildungsabschluss der Erziehungsperson, Hauptberuf der Erziehungsperson, Anzahl der mit der Erziehungsperson verbrachten Jahre vor deinem 18. Geburtstag.</strong>")
            .print()
        ,
         newCanvas("empty canvas 21", 1, 10)
            .print()
        ,
        newScale("Erziehungsperson","Mutter","Vater", "Mutter und Vater", "Mutter und eine andere Person", "Vater und eine andere Person","Eine andere Konstellation")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Bildung")
        ,
        newCanvas("empty canvas 22", 1, 40)
            .print()
        ,
        newText("3","<strong>Was ist der h&ouml;chste Bildungsabschluss, den eine der Erziehungspersonen erreicht hat?</strong>")
            .print()
        ,
        newCanvas("empty canvas 23", 1, 10)
            .print()
        ,
        newScale("Bildung_der_Erziehungsperson","Unbekannt", "Weniger als die 8. Klasse", "Hauptschulabschluss einschließlich der 9. Klasse", "Realschulabschluss einschließlich der 10./11. Klasse","Abitur", "Bachelor", "Master")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Bildung_der_Erziehungsperson1")
        ,
        newCanvas("empty canvas 24", 1, 40)
            .print()
        ,
        newText("3","<strong>Wenn zutreffend, was ist der h&ouml;chste Bildungsabschluss, den die andere Erziehungsperson erreicht hat?</strong>")
            .print()
        ,
        newCanvas("empty canvas 25", 1, 10)
            .print()
        ,
        newScale("Bildung_der_Erziehungsperson2","Unbekannt", "Weniger als die 8. Klasse", "Hauptschulabschluss einschließlich der 9. Klasse", "Realschulabschluss einschließlich der 10./11. Klasse","Abitur", "Bachelor", "Master")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Bildung_der_Erziehungsperson2")
        ,
        newCanvas("empty canvas 26", 1, 40)
            .print()
        ,
        newText("<strong>Was ist der Beruf deiner Erziehungsperson/en und wie lange arbeitet sie oder er in diesem Beruf?</strong>")
            .print()
        ,
        newCanvas("empty canvas 27", 1, 10)
            .print()
        ,
        newTextInput("Beruf_Erziehungspersonen")
            .print()
        ,
        getTextInput("Beruf_Erziehungspersonen").settings.log("final")
        ,
        newCanvas("empty canvas 28", 1, 40)
            .print()
        ,
        newButton("Weiter")
        .print()
        .wait()
);
    
PennController("questionnaire1_2",
        newText("<strong>Das ist der zweite Teil des ersten Fragebogens.<br>Bitte beantworte die folgenden Fragen zu deinem Sprachgebrauch.</strong>")
        ,
        newCanvas("empty canvas 29", 1, 40)
            .print()
        ,
        newText("Leser","<strong>Betrachtest du dich als begeisterte Leserin/begeisterten Leser?</strong>")
            .print()
        ,
        newCanvas("empty canvas 30", 1, 10)
            .print()
        ,
        newScale("Leser","Ja","Nein")
            .settings.horizontal()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Leser")
        ,
        newCanvas("empty canvas 31", 1, 40)
            .print()
        ,
        newText("<strong>Wie viele Stunden am Tag liest du im Durchschnitt?</strong>")
            .print()
        ,
        newCanvas("empty canvas 32", 1, 10)
            .print()
        ,
        newScale("Lesezeit","Weniger als 1 Stunde", "1-3 Stunden","Mehr als 3 Stunden")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Lesezeit")
        ,
        newCanvas("empty canvas 33", 1, 40)
            .print()
        ,
        newText("<strong>Ordne deine Lesevorlieben in einer Reihe, fange mit dem an, was du am meisten magst:<br>Bücher - Zeitungen - Magazine - Gedichte - Inhalte aus dem Internet - Anderes, und zwar... </strong>")
            .print()
        ,
        newCanvas("empty canvas 34", 1, 10)
            .print()
        ,
        newTextInput("Lesevorlieben")
            .print()
        ,
        getTextInput("Lesevorlieben").settings.log("final")
        ,
        newCanvas("empty canvas 35", 1, 40)
            .print()
        ,
        newText("<strong>Was ist dein Lieblingsbuch?</strong>")
            .print()
        ,
        newCanvas("empty canvas 36", 1, 10)
            .print()
        ,
        newTextInput("Lieblingsbuch")
            .print()
        ,
        getTextInput("Lieblingsbuch").settings.log("final")
        ,
        newCanvas("empty canvas 37", 1, 40)
            .print()
        ,
        newText("Leser","<strong>Liest du wenigstens 30 Minuten t&auml;glich eine Zeitung? </strong>")
            .print()
        ,
        newCanvas("empty canvas 38", 1, 10)
            .print()
        ,
        newScale("Zeitung","Ja","Nein")
            .settings.horizontal()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Zeitung")
        ,
        newCanvas("empty canvas 39", 1, 40)
            .print()
        , 
        newText("Schreiben","<strong>Schreibst du kreativ in deiner Freizeit?</strong>")
            .print()
        ,
        newCanvas("empty canvas 40", 1, 10)
            .print()
        ,
        newScale("Schreiben","Ja","Nein")
            .settings.horizontal()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Schreiben")
        ,
        newCanvas("empty canvas 41", 1, 40)
            .print()
        ,
        newText("<strong>Wenn ja, wie oft schreibst du?</strong>")
            .print()
        ,
        newCanvas("empty canvas 42", 1, 10)
            .print()
        ,
        newScale("Wie_oft_schreiben","Jeden Tag", "Mehrmals in der Woche", "Jede Woche","Mehrmals im Monat")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Wie_oft_schreiben")
        ,
        newCanvas("empty canvas 43", 1, 40)
            .print()
        ,
        newText("<strong>Was schreibst du dann haupts&auml;chlich?</strong>")
            .print()
        ,
        newCanvas("empty canvas 44", 1, 10)
            .print()
        ,
        newScale("Was_schreiben","Tagebuch", "Gedichte", "Blog","Anderes")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Was_schreiben")
        ,
        newCanvas("empty canvas 45", 1, 40)
            .print()
        ,
        newText("Leser","<strong>Bist du jemals für etwas bezahlt worden, was du geschrieben hast? </strong>")
            .print()
        ,
        newCanvas("empty canvas 46", 1, 10)
            .print()
        ,
        newScale("Bezahlt_worden?","Ja","Nein")
            .settings.horizontal()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Bezahlt_worden?")
        ,
        newCanvas("empty canvas 47", 1, 40)
            .print()
        ,
        newText("Leser","<strong>Wenn ja, was hast du geschrieben? </strong>")
            .print()
        ,
        newCanvas("empty canvas 48", 1, 10)
            .print()
        ,
        newTextInput("Was_bezahlt_geschrieben")
            .print()
        ,
        getTextInput("Was_bezahlt_geschrieben").settings.log("final")
        ,
        newCanvas("empty canvas 49", 1, 40)
            .print()
        ,
        newText("Leser","<strong>Wie viele Stunden am Tag schaust du im Durchschnitt fern? </strong>")
            .print()
        ,
        newCanvas("empty canvas 50", 1, 10)
            .print()
        ,
        newScale("Fernsehzeit","Weniger als 1 Stunde", "1-3 Stunden","Mehr als 3 Stunden")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Fernsehzeit")
        ,
        newCanvas("empty canvas 51", 1, 40)
            .print()
        ,
        newText("TV_Sendung","<strong>Was ist deine Lieblingsfernsehsendung(en)?</strong>")
        .print()
        ,
        newCanvas("empty canvas 52", 1, 10)
            .print()
        ,
        newTextInput("TV_Sendung")
            .print()
        ,
        getTextInput("TV_Sendung").settings.log("final")
        ,
        newCanvas("empty canvas 53", 1, 40)
            .print()
        ,
        newText("Radio","<strong>Wie viele Stunden am Tag h&ouml;rst du im Durchschnitt Radio? </strong>")
            .print()
        ,
        newCanvas("empty canvas 54", 1, 10)
            .print()
        ,
        newScale("Radiozeit","Weniger als 1 Stunde", "1-3 Stunden","Mehr als 3 Stunden")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Radiozeit")
        ,
        newCanvas("empty canvas 55", 1, 40)
            .print()
        ,
        newText("Was_hoerst_du_im_Radio?","<strong>Was h&ouml;rst du haupts&auml;chlich? </strong>")
            .print()
        ,
        newCanvas("empty canvas 56", 1, 10)
            .print()
        ,
        newTextInput("Was_hoerst_du_im_Radio?")
            .print()
            .settings.log("Was_hoerst_du_im_Radio?")
        ,
        newCanvas("empty canvas 57", 1, 40)
            .print()
        ,
        newText("Leser","<strong>Machst du Kreuzwortr&aumltsel?</strong>")
            .print()
        ,
        newCanvas("empty canvas 58", 1, 10)
            .print()
        ,
        newScale("Raetsel","Ja","Nein")
            .settings.horizontal()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Raetsel")
        ,
        newCanvas("empty canvas 59", 1, 40)
            .print()
        ,
        newText("Wie_oft_Raetsel","<strong>Wenn ja, wie oft?</strong>")
            .print()
        ,
        newCanvas("empty canvas 60", 1, 10)
            .print()
        ,
        newScale("Wie_oft_Raetsel","Jeden Tag", "2-3 Mal die Woche", "2-3 Mal im Monat")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Wie_oft_Raetsel")
        ,
        newCanvas("empty canvas 61", 1, 40)
            .print()
        ,
        newText("Scrabble","<strong>Spielst du Wortspiele, wie zum Beispiel Scrabble?</strong>")
            .print()
        ,
        newCanvas("empty canvas 62", 1, 10)
            .print()
        ,
        newScale("Scrabble","Ja","Nein")
            .settings.horizontal()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Scrabble")
        ,
        newCanvas("empty canvas 63", 1, 40)
            .print()
        ,
        newText("Scrabble","<strong>Wenn ja, wie oft?</strong>")
            .print()
        ,
        newCanvas("empty canvas 64", 1, 10)
            .print()
        ,
        newScale("Wie_oft_Scrabble","Jeden Tag", "2-3 Mal die Woche", "2-3 Mal im Monat")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Wie_oft_scrabble")
        ,
        newCanvas("empty canvas 65", 1, 40)
            .print()
        ,
        newText("Vorgelesen","<strong>Wie oft wurde dir als Kind von deinen Eltern oder anderen vorgelesen?</strong>")
            .print()
        ,
        newCanvas("empty canvas 66", 1, 10)
            .print()
        ,
        newScale("Vorgelesen","Jeden Tag", "2-3 Mal die Woche", "2-3 Mal im Monat")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Vorgelesen")
        ,
        newCanvas("empty canvas 67", 1, 40)
            .print()
        ,
        newText("Lesen","<strong>Wie viele Stunden hast du als Kind ungef&auml;hr in einer Woche gelesen?</strong>")
            .print()
        ,
        newCanvas("empty canvas 68", 1, 10)
            .print()
        ,
        newScale("Selbst_gelesen","1-7 Stunden", "8-14 Stunden", "15-21 Stunden","mehr als 21 Stunden")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Selbst_gelesen")
        ,
        newCanvas("empty canvas 69", 1, 40)
            .print()
        ,
        newText("Fernsehen","<strong>Wie viele Stunden hast du als Kind ungef&auml;hr in einer Woche ferngesehen?</strong>")
            .print()
        ,
        newCanvas("empty canvas 70", 1, 10)
            .print()
        ,
        newScale("Ferngesehen","1-7 Stunden", "8-14 Stunden", "15-21 Stunden","mehr als 21 Stunden")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Ferngesehen")
        ,
        newCanvas("empty canvas 71", 1, 40)
            .print()
        ,
        newText("Videospiele","<strong>Wie viele Stunden hast du als Kind ungef&auml;hr in einer Woche Videospiele gespielt?</strong>")
            .print()
        ,
        newCanvas("empty canvas 72", 1, 10)
            .print()
        ,
        newScale("Videospiele","1-7 Stunden", "8-14 Stunden", "15-21 Stunden","mehr als 21 Stunden")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Videospiele")
        ,
        newCanvas("empty canvas 73", 1, 40)
            .print()
        ,
        newText("Meine_Deutschkenntnisse_Vergleich","<strong>Wie beurteilst du deine allgemeinen Sprachkenntnisse im Vergleich zu anderen Erwachsenen, die Deutsch sprechen?</strong>")
            .print()
        ,
        newCanvas("empty canvas 74", 1, 10)
            .print()
        ,
        newScale("Meine_Deutschkenntnisse_Vergleich","Schlechter","Durchschnitt","Besser")
            .settings.vertical()
            .settings.labelsPosition("bottom")
        //    .settings.before(newText("schlechter", "schlechter") )
            //.settings.after(newText("besser", "besser")   )
            .settings.left()
            .print()
            .settings.log("IMeine_Deutschkenntnisse_Vergleich") 
        ,
        newCanvas("empty canvas 75", 1, 40)
            .print()
        ,
         newButton("Weiter")
        .print()
        .wait()
        
);

//////////////////////////////////////////////////////////////////////////////////fragebogen 4 factors/////////////////////////////////////

PennController("FourFactors",
        newText("<strong>Fragebogen zur Lebenssituation</strong>")
        ,
        newText("1","<strong>Welchem Geschlecht ordnest du dich zu?</strong>")
            .print()
        ,
        newCanvas("empty canvas 76", 1, 10)
            .print()
            ,
        newScale("Geschlecht","Weiblich","M&auml;nnlich","Divers")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Geschlecht")
            ,
        newCanvas("empty canvas 77", 1, 40)
            .print()
            ,
        newText("2","<strong>Lebst du in einer Partnerschaft?</strong>")
            .print()
            ,
            newCanvas("empty canvas 78", 1, 10)
            .print()
            ,
        newScale("Partnerschaft","Ja", "Nein")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            //.wait()
            .settings.log("Partnerschaft")
            ,
            newCanvas("empty canvas 79", 1, 40)
            .print()
            ,
        newText("3","<strong>Was ist dein h&ouml;chster Bildungsabschluss?</strong>")
            .print()
            ,
            newCanvas("empty canvas 80", 1, 10)
            .print()
            ,
        newScale("Bildung","Unbekannt", "Weniger als die 8. Klasse", "Hauptschulabschluss einschlie&szlig;lich der 9. Klasse", "Realschulabschluss einschlie&szlig;lich der 10./11. Klasse","Abitur", "Bachelor", "Master")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Bildung")
            ,
        newCanvas("empty canvas 81", 1, 40)
            .print()
            ,
        newText("3.1","<strong>Wenn zutreffend, was ist der h&ouml;chste Bildungsabschluss deines Partners/deiner Partnerin?</strong>")
            .print()
            ,
            newCanvas("empty canvas 82", 1, 10)
            .print()
            ,
        newScale("Bildung_Partner","Unbekannt", "Weniger als die 8. Klasse", "Hauptschulabschluss einschlie&szlig;lich der 9. Klasse", "Realschulabschluss einschlie&szlig;lich der 10./11. Klasse","Abitur", "Bachelor", "Master")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Bildung_Partner")
            ,
        newCanvas("empty canvas 83", 1, 40)
            .print()
            ,
        newText("4","<strong>Welchen Beruf hast du?")
            .print()
            ,
            newCanvas("empty canvas 84", 1, 10)
            .print()
            ,
        newScale("Beruf","Unbekannt", "Servicekraft, Student/in, Hausfrau/Hausmann", "Hilfskraft, ungelernter Arbeiter/ ungelernte Arbeiterin", "Maschinenf&uuml;hrer/in, angelernte Arbeitskraft", "Handwerker/in", "B&ouml;roangestellte/r, Arbeiter/in,Monteur/in", "Techniker/in, Verwaltungsangestellte/r, Sachbearbeiter/in", "Inhaber/in eines kleinen Unternehmens, leitende/r Angestellte/r,Meister/in", "Inhaber/in eines mittelst&auml;ndischen Unternehmens, Beamtin/Beamter, Angestellte/r im gehobenen &ouml;ffentlichen Dienst","Gesch&auml;ftsf&uuml;hrer/in, F&uuml;hrungskraft, Manager/in, Inhaber/in eines gro&szlig;en Unternehmens")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Beruf")
            ,
        newCanvas("empty canvas 85", 1, 40)
            .print()
            ,
        newText("4.1","<strong>Wenn zutreffend, welchen Beruf hat dein Partner/deine Partnerin?</strong>")
            .print()
            ,
             newCanvas("empty canvas 86", 1, 10)
            .print()
            ,
       newScale("Beruf_Partner","Unbekannt", "Servicekraft, Student/in, Hausfrau/Hausmann", "Hilfskraft, ungelernter Arbeiter/ ungelernte Arbeiterin", "Maschinenf&uuml;hrer/in, angelernte Arbeitskraft", "Handwerker/in", "B&uuml;roangestellte/r, Arbeiter/in,Monteur/in","Techniker/in, Verwaltungsangestellte/r, Sachbearbeiter/in","Inhaber/in eines kleinen Unternehmens, leitende/r Angestellte/r,Meister/in","Inhaber/in eines mittelst&auml;ndischen Unternehmens, Beamtin/Beamter, Angestellte/r im gehobenen &ouml;ffentlichen Dienst","Gesch&auml;ftsf&uuml;hrer/in, F&uuml;hrungskraft, Manager/in, Inhaber/in eines gro&szlig;en Unternehmens")
            .settings.vertical()
            .settings.labelsPosition("bottom")
            .settings.left()
            .print()
            .settings.log("Beruf_Partner")
            ,
        newCanvas("empty canvas 87", 1, 60)
            .print()    
            ,
        newButton("Weiter")
        .print()
        .wait()
);

PennController.SendResults("send");

//////////////////////////////////////////////////////////////////////////////////end/////////////////////////////////////////////////////

PennController("final",
    
    newText("Vielen Dank.")                 
        .print()  
    ,
    newCanvas("d1",1,40)
        .print()
    ,
    newText("Beachte den folgenden Hinweis:")      
        .print()
    ,
    newCanvas("d2",1,40)
        .print()
    ,
    newText("Bitte notiere dir den Code: <strong>OB222318</strong>.<br>Ohne diesen Code kann die Honorarauszahlung &uuml;ber Clickworker.de nicht erfolgen.")
        .print()
    ,
    newCanvas("d3",1,40)
        .print()
    ,
    newText("M&ouml;chtest du mir noch Kommentar hinterlassen?")
        .print()  
    ,
    newCanvas("d4",1,40)
        .print()
    ,
    newTextInput("Comment")                          
        .print() 
    ,
    getTextInput("Comment").settings.log("final")
    ,
    newCanvas("d5",1,40)
        .print()
    ,
    newText("Wenn du auf den folgenden Button klickst, gelangst du auf eine leere Seite mit vollem Progress-Balken. Das Fenster kannst du dann schließen.")
        .print() 
    ,
    newCanvas("d6",1,40)
        .print()
    ,
    newButton("Experiment beenden.")              
        .print()                            
        .wait()    
    );







