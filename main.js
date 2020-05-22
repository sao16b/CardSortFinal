function getPdfs(wouldChooseArr, wouldNotChooseArr, mightChooseArr, wouldChooseHCode, wouldNotChooseHCode, mightChooseHCode, wouldChooseZone, wouldNotChooseZone, mightChooseZone) {
    $.when($.getScript("https://github.com/devongovett/blob-stream/releases/download/v0.1.2/blob-stream-v0.1.2.js"),
    $.getScript("https://github.com/devongovett/pdfkit/releases/download/v0.6.2/pdfkit.js"),$.Deferred(function (deferred) { $(deferred.resolve);})).done(function() {
        //Brief
        //Full
        //var pathBrief = "../PDFs/BriefReports/cardSortBriefReport_" + millis.toString() + ".pdf";
        //var pathFull = "../PDFs/FullReports/cardSortReport_" + millis.toString() + ".pdf";
        const doc = new PDFDocument({margin:54});
        const stream = doc.pipe(blobStream());
        doc.info['Title'] = "cardSortFullReport";
        
        const briefDoc = new PDFDocument({layout: 'landscape', margin: 53.5});
        const briefStream = briefDoc.pipe(blobStream());
        doc.info['Title'] = "cardSortBriefReport";
        
        //page 1
        doc.font('Helvetica-Bold').fontSize(20).text("Your Occupational Card Sort Results", {align: 'center'});
        doc.moveDown(0.5);
        doc.font('Helvetica').fontSize(11).text("This is a summary report of your occupational card sort. The following steps have been created to allow you to apply your card sort results to your career decision-making process. These steps can be completed with a counselor, career advisor, or as a stand-alone activity. This report will address the three piles of your card sort, beginning with the \"Would Choose\" pile and ending with the \"Might Choose\" pile. A summary of all three piles will be included at the end of your report, along with additional resources.", {align: 'left'});
        doc.moveDown(2);
        doc.font('Helvetica-Bold').fontSize(14).text("Overview of this Report", {align: 'center'});
        doc.moveDown(0.5);
        doc.font('Helvetica-Bold').fontSize(11).text("1. Working with your \"Would Choose\" cards", {align: 'left'});
        doc.moveDown(0.5);
        doc.font('Helvetica').fontSize(11).text("        a. Identify reasons you would choose each card.", {align: 'left'});
        doc.moveDown(0.5);
        doc.font('Helvetica').fontSize(11).text("        b. Look for themes.", {align: 'left'});
        doc.moveDown(0.5);
        doc.font('Helvetica').fontSize(11).text("        c. Prioritize your list.", {align: 'left'});
        doc.moveDown(0.5);
        doc.font('Helvetica').fontSize(11).text("        d. Determine next steps.", {align: 'left'});
        doc.moveDown(1);
        doc.font('Helvetica-Bold').fontSize(11).text("2. Working with your \"Would Not Choose\" cards", {align: 'left'});
        doc.moveDown(0.5);
        doc.font('Helvetica').fontSize(11).text("        a. Identify reasons you would not choose each card.", {align: 'left'});
        doc.moveDown(0.5);
        doc.font('Helvetica').fontSize(11).text("        b. Look for themes.", {align: 'left'});
        doc.moveDown(0.5);
        doc.font('Helvetica').fontSize(11).text("        c. Evaluate each option.", {align: 'left'});
        doc.moveDown(0.5);
        doc.font('Helvetica').fontSize(11).text("        d. Determine next steps.", {align: 'left'});
        doc.moveDown(1);
        doc.font('Helvetica-Bold').fontSize(11).text("3. Working with your \"Might Choose\" cards", {align: 'left'});
        doc.moveDown(0.5);
        doc.font('Helvetica').fontSize(11).text("        a. Identify reasons you are unsure for each card.", {align: 'left'});
        doc.moveDown(0.5);
        doc.font('Helvetica').fontSize(11).text("        b. Determine next steps.", {align: 'left'});
        doc.moveDown(1);
        doc.font('Helvetica-Bold').fontSize(11).text("4. Exploring Holland codes and job zones of your cards", {align: 'left'});
        doc.moveDown(1);
        doc.font('Helvetica-Bold').fontSize(11).text("5. Using the VCS to inform your career decision", {align: 'left'});
        doc.addPage();

        doc.font('Helvetica-Bold').fontSize(14).text("Working with your \"Would Choose\" Cards", {align: 'center'});
        doc.moveDown(0.5);
        doc.font('Helvetica-Bold').fontSize(11).text("Would Choose");
        doc.moveDown(0.5);
        var wcList="", wncList = "", mcList = "", wcListEx = "", wncListEx = "", mcListEx = "";
        for(var i = 0; i < wouldChooseArr.length; i++)
        {
            console.log(wouldChooseArr[i].header);
            wcList += wouldChooseArr[i].header + "\n";
            wcListEx += wouldChooseArr[i].header + " - " + wouldChooseArr[i].hCode + ", " + wouldChooseArr[i].zone + "\n";
        }
        while(i%18 != 0) {
            console.log(i);
            wcList += "\n";
            //wcListEx += "\n";
            i++;
        }
        console.log(wcList);
        doc.font('Helvetica').fontSize(11).text(wcList, {columns: 2, columnGap: 15, height: 240, width: 504, align: 'justify'});
        doc.moveDown();
        
        doc.font('Helvetica-Bold').fontSize(11).text("1. Add to the list. ", {continued: true});
        doc.font('Helvetica').fontSize(11).text("Are there options you are strongly considering that are not listed above? If so, add those to the list above.");
        doc.moveDown(1);
        doc.font('Helvetica-Bold').fontSize(11).text("2. Identify the reasons you like the occupations. ", {continued: true});
        doc.font('Helvetica').fontSize(11).text("Beside each occupation, write the main reason(s) you put the card in the \"Would Choose\" pile.");
        doc.moveDown(1);
        doc.font('Helvetica-Bold').fontSize(11).text("3. Identify and write down themes. ", {continued: true});
        doc.font('Helvetica').fontSize(11).text("Look over each reason you wrote, and identify (circle or highlight) any themes you see. This could be related to your interests, skills, or values, how much training is required, work environments, values, etc.");
        doc.moveDown(5);
        doc.font('Helvetica-Bold').fontSize(11).text("4. Prioritize your list. ", {continued: true});
        doc.font('Helvetica').fontSize(11).text("Are there some options you like more than others? Try to rank order the top ones by placing a number next to each option.");
        doc.moveDown(1);
        doc.font('Helvetica-Bold').fontSize(11).text("5. Determine next steps. ", {continued: true});
        doc.font('Helvetica').fontSize(11).text("For the options you're most interested in, check all that apply:");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Research these options (", {continued: true});
        doc.font('Helvetica').fontSize(11).fillColor('blue').text('https://www.onetonline.org', {underline: true, link: "https://www.onetonline.org/", continued: true}).fillColor('black').text("; ", {continued: true, link: '', underline: false}).fillColor('blue').text('https://www.bls.gov', {underline: true, link: "https://www.bls.gov/", continued: true}).fillColor('black').text(")", {link: '', underline: false});
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Talk with someone in these occupations");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Volunteer in an area related to these fields");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Take other assessments to see how my skills and values relate to these options");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Take a class related to these options");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Shadow someone in these occupations");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Other (write your next steps here):");
        doc.addPage();
        doc.font('Helvetica-Bold').fontSize(14).text("Working with your \"Would Not Choose\" Cards", {align: 'center'});
        doc.moveDown(0.5);
        doc.font('Helvetica-Bold').fontSize(11).text("Would Not Choose");
        doc.moveDown(0.5);

        for(i = 0; i < wouldNotChooseArr.length; i++)
        {
            console.log(wouldNotChooseArr[i].header);
            wncList += wouldNotChooseArr[i].header + "\n";
            wncListEx += wouldNotChooseArr[i].header + " - " + wouldNotChooseArr[i].hCode + ", " + wouldNotChooseArr[i].zone + "\n";
        }
        while(i%18 != 0) {
            console.log(i);
            wncList += "\n";
            //wncListEx += "\n";
            i++;
        }
        console.log(wncList);
        doc.font('Helvetica').fontSize(11).text(wncList, {columns: 2, columnGap: 15, height: 240, width: 504, align: 'justify'});
        doc.moveDown();
        
        doc.font('Helvetica-Bold').fontSize(11).text("1. Identify the reasons you would not choose these occupations. ", {continued: true});
        doc.font('Helvetica').fontSize(11).text("Beside each occupation, write the main reason(s) you put the card in the \"Would Not Choose\" pile.");
        doc.moveDown(1);
        doc.font('Helvetica-Bold').fontSize(11).text("2. Identify and write down themes. ", {continued: true});
        doc.font('Helvetica').fontSize(11).text("Look over each reason you wrote, and write down any themes you see. This could be related to your interests, skills, or values, how much training is required, work environments, values, etc.");
        doc.moveDown(5);
        doc.font('Helvetica-Bold').fontSize(11).text("3. Evaluate each option. ", {continued: true});
        doc.font('Helvetica').fontSize(11).text("Before eliminating an option, evalute whether the decision is based on factual information, stereotypical information, negative self-talk about your skills or opportunities, etc.");
        doc.moveDown(1);
        doc.font('Helvetica-Bold').fontSize(11).text("4. Determine next steps. ", {continued: true});
        doc.font('Helvetica').fontSize(11).text("Based on your response to the question above, which of the following next steps do you need to take? (check all that apply):");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              None needed");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Research these options (", {continued: true});
        doc.font('Helvetica').fontSize(11).fillColor('blue').text('https://www.onetonline.org', {underline: true, link: "https://www.onetonline.org/", continued: true}).fillColor('black').text("; ", {continued: true, link: '', underline: false}).fillColor('blue').text('https://www.bls.gov', {underline: true, link: "https://www.bls.gov/", continued: true}).fillColor('black').text(")", {link: '', underline: false});
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Talk with someone in these occupations");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Volunteer in an area related to these fields");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Take other assessments to see how my skills and values relate to these options");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Take a class related to these options");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Shadow someone in these occupations");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Talk with a career counselor about my negative self-talk");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Other (write your next steps here):");
        doc.addPage();
        
        doc.font('Helvetica-Bold').fontSize(14).text("Working with your \"Might Choose\" Cards", {align: 'center'});
        doc.moveDown(0.5);
        doc.font('Helvetica-Bold').fontSize(11).text("Might Choose");
        doc.moveDown(0.5);

        for(i = 0; i < mightChooseArr.length; i++)
        {
            console.log(mightChooseArr[i].header);
            mcList += mightChooseArr[i].header + "\n";
            mcListEx += mightChooseArr[i].header + " - " + mightChooseArr[i].hCode + ", " + mightChooseArr[i].zone + "\n";
        }
        while(i%18 != 0) {
            console.log(i);
            mcList += "\n";
            //mcListEx += "\n";
            i++;
        }
        console.log(mcList);
        doc.font('Helvetica').fontSize(11).text(mcList, {columns: 2, columnGap: 15, height: 240, width: 504, align: 'justify'});
        doc.moveDown();
        
        doc.font('Helvetica-Bold').fontSize(11).text("1. Identify the reasons you might choose these occupations. ", {continued: true});
        doc.font('Helvetica').fontSize(11).text("Beside each occupation, write the main reason(s) you put the card in the \"Might Choose\" pile. What are you unsure about? What additional information about yourself or these options do you need?");
        doc.moveDown(5);
        doc.font('Helvetica-Bold').fontSize(11).text("2. Determine next steps. ", {continued: true});
        doc.font('Helvetica').fontSize(11).text("Based on your response to the question above, which of the following next steps do you need to take? (check all that apply):");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              None needed");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Research these options (", {continued: true});
        doc.font('Helvetica').fontSize(11).fillColor('blue').text('https://www.onetonline.org', {underline: true, link: "https://www.onetonline.org/", continued: true}).fillColor('black').text("; ", {continued: true, link: '', underline: false}).fillColor('blue').text('https://www.bls.gov', {underline: true, link: "https://www.bls.gov/", continued: true}).fillColor('black').text(")", {link: '', underline: false});
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Talk with someone in these occupations");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Volunteer in an area related to these fields");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Take other assessments to see how my skills and values relate to these options");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Take a class related to these options");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Shadow someone in these occupations");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Talk with a career counselor about my negative self-talk");
        doc.moveDown(0.5);
        doc.rect(doc.x+32, doc.y, 5, 5).stroke();
        doc.font('Helvetica').fontSize(11).text("              Other (write your next steps here):");
        doc.addPage();
        //doc.rect(doc.x, doc.y, 504, 168).stroke();
        doc.font('Helvetica-Bold').fontSize(14).text("Introduction to Holland Types", {align: 'center'});
        doc.moveDown(0.5);
        doc.font('Helvetica').fontSize(11).text("John Holland stated that there are six types of personalities and six types of work environments, and that we are happiest when we find a match between the two.", {align: 'left'});
        doc.moveDown(1);
        doc.font('Helvetica-Bold').fontSize(11).text("Realistic (R): ", {continued: true});
        doc.font('Helvetica').fontSize(11).text("Enjoys hands-on activities, such as fixing things, mechanics, sports, outside type of work.");
        doc.moveDown(0.5);
        doc.font('Helvetica-Bold').fontSize(11).text("Investigative (I): ", {continued: true});
        doc.font('Helvetica').fontSize(11).text("Enjoys problem-solving, thinking about complex matters, engineering, science, and math.");
        doc.moveDown(0.5);
        doc.font('Helvetica-Bold').fontSize(11).text("Artistic (A): ", {continued: true});
        doc.font('Helvetica').fontSize(11).text("Enjoys creative thought and expression of ideas, such as music, art, dance, and writing.");
        doc.moveDown(0.5);
        doc.font('Helvetica-Bold').fontSize(11).text("Social (S): ", {continued: true});
        doc.font('Helvetica').fontSize(11).text("Enjoys working with and helping people, such as teaching, counseling, and nursing.");
        doc.moveDown(0.5);
        doc.font('Helvetica-Bold').fontSize(11).text("Enterprising (E): ", {continued: true});
        doc.font('Helvetica').fontSize(11).text("Enjoys managing and directing, such as business, sales, and management.");
        doc.moveDown(0.5);
        doc.font('Helvetica-Bold').fontSize(11).text("Conventional (C): ", {continued: true});
        doc.font('Helvetica').fontSize(11).text("Enjoys organizing information and numbers, such as accountants, actuaries, and analysts.");
        doc.moveDown(1);
        doc.font('Helvetica').fontSize(11).text("        1. Which of these general descriptions best fit you? Circle or highlight the ones that best describe you above.");
        doc.moveDown(2);
        doc.font('Helvetica').fontSize(11).text("        2. How do the occupations in the \"Would Choose\" cards compare to your main Holland descriptors you marked above?");
        doc.moveDown(2);
        doc.font('Helvetica').fontSize(11).text("        3. How do the occupations in the \"Would Not Choose\" cards compare to your main Holland descriptors you marked above?");
        doc.moveDown(2);
        doc.font('Helvetica').fontSize(11).text("        4. How do the occupations in the \"Might Choose\" cards compare to your main Holland descriptors you marked above?");
        doc.moveDown(2);
        doc.font('Helvetica').fontSize(11).text("If you have few or even no exact matches in your \"Would Choose\" pile, don't worry. This is just a rough estimate of your Holland type. There are more sophisticated instruments that can determine your exact type and compare your type to hundreds of occupations, such as the Self-Directed Search (SDS), available at ", {continued: true});
        doc.font('Helvetica').fontSize(11).fillColor('blue').text('http://www.self-directed-search.com', {underline: true, link: "http://www.self-directed-search.com/", continued: true}).fillColor('black').text(". The SDS is an inventory with high reliability and validity that will determine your three-letter Holland code and provide you with a list of corresponding occupations for a minimal charge. You can see an occupation's primary Holland type by entering it into ", {continued: true, link: '', underline: false}).fillColor('blue').text('https://www.onetonline.org', {underline: true, link: "https://www.onetonline.org/", continued: true}).fillColor('black').text(".", {continued: true, link: '', underline: false});
        doc.moveDown();
        doc.addPage({layout: 'landscape', margin: 53.5});
        var wcZone = "", wncZone = "", mcZone = "", wcHCode = "", wncHCode = "", mcHCode = "";
        
        for (i = 0; i < 3; i++) {
            var max = Math.max.apply(null, wouldChooseZone), maxi = wouldChooseZone.indexOf(max);
            if (max == 0) break;
            wouldChooseZone[maxi] = -1;
            if (i == 0) wcZone += (maxi + 1);
            else wcZone += ", " + (maxi + 1);
        }
        for (i = 0; i < 3; i++) {
            max = Math.max.apply(null, wouldChooseHCode), maxi = wouldChooseHCode.indexOf(max);
            if (max == 0) break;
            wouldChooseHCode[maxi] = -1;
            if (i == 0) wcHCode += getHCode(maxi);
            else wcHCode += ", " + getHCode(maxi);
        }
        for (i = 0; i < 3; i++) {
            var max = Math.max.apply(null, wouldNotChooseZone), maxi = wouldNotChooseZone.indexOf(max);
            if (max == 0) break;
            wouldNotChooseZone[maxi] = -1;
            if (i == 0) wncZone += (maxi + 1);
            else wncZone += ", " + (maxi + 1);
        }
        for (i = 0; i < 3; i++) {
            max = Math.max.apply(null, wouldNotChooseHCode), maxi = wouldNotChooseHCode.indexOf(max);
            if (max == 0) break;
            wouldNotChooseHCode[maxi] = -1;
            if (i == 0) wncHCode += getHCode(maxi);
            else wncHCode += ", " + getHCode(maxi);
        }
        for (i = 0; i < 3; i++) {
            var max = Math.max.apply(null, mightChooseZone), maxi = mightChooseZone.indexOf(max);
            if (max == 0) break;
            mightChooseZone[maxi] = -1;
            if (i == 0) mcZone += (maxi + 1);
            else mcZone += ", " + (maxi + 1);
        }
        for (i = 0; i < 3; i++) {
            max = Math.max.apply(null, mightChooseHCode), maxi = mightChooseHCode.indexOf(max);
            if (max == 0) break;
            mightChooseHCode[maxi] = -1;
            if (i == 0) mcHCode += getHCode(maxi);
            else mcHCode += ", " + getHCode(maxi);
        }
        
        console.log(wcZone + " " + wcHCode);
        console.log(wncZone + " " + wncHCode);
        console.log(mcZone + " " + mcHCode);
        
        briefDoc.font('Helvetica-Bold').fontSize(14).text("Summary Report of Your Occupational Card Sort", {align: 'center'});
        briefDoc.moveDown();
        
        briefDoc.font('Helvetica-Bold').fontSize(8).text("Would Choose\nWould Not Choose\nMight Choose\n", {columns: 3, columnGap: 15, height: 10, width: 685, align: 'center'});
        briefDoc.moveDown();
        var y = briefDoc.y;
        var x = briefDoc.x;
        //moveTo(x, y);
        //
        briefDoc.font('Helvetica').fontSize(8).text(wcListEx, {columns: 2, columnGap: 5, height: 220, width: 225, align: 'left'});
        briefDoc.font('Helvetica').fontSize(8).text(wncListEx, 283.5, y, {columns: 2, columnGap: 5, height: 220, width: 225, align: 'left'});
        briefDoc.font('Helvetica').fontSize(8).text(mcListEx, 513.5, y, {columns: 2, columnGap: 5, height: 220, width: 225, align: 'left'});
        briefDoc.moveDown();
        
        briefDoc.font('Helvetica-Bold').fontSize(14).text("Main Holland Types", 53.5, 450, {align: 'center'});
        y = briefDoc.y;
        briefDoc.font('Helvetica-Bold').fontSize(11).text("Would Choose: ", {continued: true});
        briefDoc.font('Helvetica').fontSize(11).text(wcHCode, {align: 'left'});
        briefDoc.font('Helvetica-Bold').fontSize(11).text("Might Choose: ", 340, y, {continued: true});
        briefDoc.font('Helvetica').fontSize(11).text(mcHCode, {align: 'left'});
        briefDoc.font('Helvetica-Bold').fontSize(11).text("Would Not Choose: ", 572, y, {continued: true});
        briefDoc.font('Helvetica').fontSize(11).text(wncHCode, {align: 'left'});
        
        briefDoc.font('Helvetica-Bold').fontSize(14).text("Main Job Zones", 53.5, 500, {align: 'center'});
        y = briefDoc.y;
        briefDoc.font('Helvetica-Bold').fontSize(11).text("Would Choose: ", {continued: true});
        briefDoc.font('Helvetica').fontSize(11).text(wcZone, {align: 'left'});
        console.log(briefDoc.x);
        briefDoc.font('Helvetica-Bold').fontSize(11).text("Might Choose: ", 340, y, {continued: true});
        briefDoc.font('Helvetica').fontSize(11).text(mcZone, {align: 'left'});
        console.log(briefDoc.x);
        briefDoc.font('Helvetica-Bold').fontSize(11).text("Would Not Choose: ", 572, y, {continued: true});
        briefDoc.font('Helvetica').fontSize(11).text(wncZone, {align: 'left'});
        
        
        doc.font('Helvetica-Bold').fontSize(14).text("Summary Report of Your Occupational Card Sort", {align: 'center'});
        doc.moveDown();
        
        doc.font('Helvetica-Bold').fontSize(8).text("Would Choose\nWould Not Choose\nMight Choose\n", {columns: 3, columnGap: 15, height: 10, width: 685, align: 'center'});
        doc.moveDown();
        var y = doc.y;
        var x = doc.x;
        //moveTo(x, y);
        //
        doc.font('Helvetica').fontSize(8).text(wcListEx, {columns: 2, columnGap: 5, height: 220, width: 225, align: 'left'});
        doc.font('Helvetica').fontSize(8).text(wncListEx, 283.5, y, {columns: 2, columnGap: 5, height: 220, width: 225, align: 'left'});
        doc.font('Helvetica').fontSize(8).text(mcListEx, 513.5, y, {columns: 2, columnGap: 5, height: 220, width: 225, align: 'left'});
        doc.moveDown();
        
        doc.font('Helvetica-Bold').fontSize(14).text("Main Holland Types", 53.5, 450, {align: 'center'});
        y = doc.y;
        doc.font('Helvetica-Bold').fontSize(11).text("Would Choose: ", {continued: true});
        doc.font('Helvetica').fontSize(11).text(wcHCode, {align: 'left'});
        doc.font('Helvetica-Bold').fontSize(11).text("Might Choose: ", 340, y, {continued: true});
        doc.font('Helvetica').fontSize(11).text(mcHCode, {align: 'left'});
        doc.font('Helvetica-Bold').fontSize(11).text("Would Not Choose: ", 572, y, {continued: true});
        doc.font('Helvetica').fontSize(11).text(wncHCode, {align: 'left'});
        
        doc.font('Helvetica-Bold').fontSize(14).text("Main Job Zones", 53.5, 500, {align: 'center'});
        y = doc.y;
        doc.font('Helvetica-Bold').fontSize(11).text("Would Choose: ", {continued: true});
        doc.font('Helvetica').fontSize(11).text(wcZone, {align: 'left'});
        console.log(doc.x);
        doc.font('Helvetica-Bold').fontSize(11).text("Might Choose: ", 340, y, {continued: true});
        doc.font('Helvetica').fontSize(11).text(mcZone, {align: 'left'});
        console.log(doc.x);
        doc.font('Helvetica-Bold').fontSize(11).text("Would Not Choose: ", 572, y, {continued: true});
        doc.font('Helvetica').fontSize(11).text(wncZone, {align: 'left'});
        console.log(doc.x);
        doc.addPage({layout: 'portrait', margin: 54});
        doc.font('Helvetica-Bold').fontSize(20).text("Summary Report of Your Occupational Card Sort", {align: 'center'});
        doc.moveDown();
        doc.font('Helvetica-Bold').fontSize(14).text("Using the VCS to Inform your Career Decision", {align: 'center'});
        doc.moveDown();
        doc.font('Helvetica').fontSize(11).text("1. ", {align: 'left', continued: true});
        doc.font('Helvetica-Bold').fontSize(11).text("Learn more about yourself. ", {align: 'left', continued: true});
        doc.font('Helvetica').fontSize(11).text("Did you see patterns in your VCS results? Were there themes among the cards in your \"Would Choose\" and \"Would Not Choose\" pile? These might reflect your values, interests, and skills. The VCS is not an intensive inventory. If you feel you need to know more about yourself prior to making a career decision, consider taking a formal assessment at a college/university career center, or a one-step center. Other ways to learn more about yourself might be to create a collage of your interests, analyzing your resume for aspects of each job you enjoyed, were good at, felt proud of, or valued (or the opposite - aspects you disliked, were not skilled at, etc.), or talking with people who care about you to learn what they see your strengths as.", {align: 'left'});
        doc.moveDown();
        doc.font('Helvetica').fontSize(11).text("2. ", {align: 'left', continued: true});
        doc.font('Helvetica-Bold').fontSize(11).text("Learn more about your options. ", {align: 'left', continued: true});
        doc.font('Helvetica').fontSize(11).text("The occupations of the VCS were found in the US Department of Labor's O*NET Online (", {align: 'left', continued: true});
        doc.font('Helvetica').fontSize(11).fillColor('blue').text('onetonline.org', {underline: true, link: "https://www.onetonline.org/", continued: true}).fillColor('black').text("). ", {continued: true, link: '', underline: false});
        doc.font('Helvetica').fontSize(11).text("You can search for detailed information about the jobs in your \"Would Choose\" and \"Might Choose\" piles on this site. You might also explore the related occupations that are on the cards. If you want to expand your list of options, you can explore related occupations, or even search by Holland RIASEC type. Other ways to learn about occupations is to search current job openings, to see the education and training required, as well as job requirements, or reaching out and talking to individuals in the field about their jobs.", {align: 'left'});
        doc.moveDown();
        doc.font('Helvetica').fontSize(11).text("3. ", {align: 'left', continued: true});
        doc.font('Helvetica-Bold').fontSize(11).text("Engage in a decision-making process. ", {align: 'left', continued: true});
        doc.font('Helvetica').fontSize(11).text("As you learn more about yourself and your options, you are engaging in a career decision-making process. Your options increase or decrease as you discover more of what you like, are good at, and value, and your self-knowledge is sharpened as you evaluate different options. This is just one step of a decision-making process. Once you have narrowed your list down to 3-5 options, you need to engage in a deeper analysis to help you make the best choice. To do this, you need to ", {align: 'left', continued: true});
        doc.font('Helvetica-Bold').fontSize(11).text("consider what factors are most important to you and consider each option through that lens. ", {align: 'left', continued: true});
        doc.font('Helvetica').fontSize(11).text("For example, you might value the opportunity to travel, or a high or stable salary, or job security, or opportunities for advancement - how do each of your options compare to these? Second, for most of us, our career decision is not made in a vacuum; it affects others. ", {align: 'left', continued:true});
        doc.font('Helvetica-Bold').fontSize(11).text("How does your career decision affect the important people in your life? ", {align: 'left', continued: true});
        doc.font('Helvetica').fontSize(11).text("You may need to consider the pros and cons of each option to your significant other, your family, your community, etc. At one point, you'll want to ", {align: 'left', continued: true});
        doc.font('Helvetica-Bold').fontSize(11).text("try out your top options, ", {align: 'left', continued: true});
        doc.font('Helvetica').fontSize(11).text("perhaps through taking a class, volunteering, or part-time work, to confirm that the option fits you.", {align: 'left'});
        doc.moveDown();
        doc.font('Helvetica').fontSize(11).text("4. ", {align: 'left', continued: true});
        doc.font('Helvetica-Bold').fontSize(11).text("Be aware of and control any negative self-talk. ", {align: 'left', continued: true});
        doc.font('Helvetica').fontSize(11).text("research has shown that negative self-talk (\"I'm not good at anything,\" or \"There aren't any options out there for me,\" or \"I never make good decisions\") are the main reason people have problems making a career decision. Did you experience any negative self-talk as you went through the VCS or as you explore your options? Words like\"should, never, always\" are indicators. ", {align: 'left', continued: true});
        doc.font('Helvetica-Bold').fontSize(11).text("You can control negative self-talk by challenging it, ", {align: 'left', continued: true});
        doc.font('Helvetica').fontSize(11).text("asking wehther it is ALWAYS the case, or looking for exceptions to the statement. You can create what is called a cognitive reframe, which is re-stating the thought in a more helpful way. For example, instead of saying \"I don't have any idea of what I want to do,\" consider instead, \"I am considering many different options of what I might want to do.\" Instead of \"I'm a horrible decision maker,\" say \"I'm learning how to make better decisions.\" You'll be surprised at how much clearer the career decision-making process becomes when you control the negative thoughts.", {align: 'left'});
        doc.addPage();
        doc.font('Helvetica-Bold').fontSize(20).text("Summary Report of Your Occupational Card Sort", {align: 'center'});
        doc.moveDown();
        doc.font('Helvetica-Bold').fontSize(14).text("Using the VCS to Inform your Career Decision", {align: 'center'});
        doc.moveDown();
        doc.font('Helvetica').fontSize(11).text("So what are your next steps? What will help you move closer to making a career decision? Write them below.", {align: 'left'});
        doc.moveDown();
        doc.moveDown();
        doc.font('Helvetica-Bold').fontSize(11).text("Next Steps", {align: 'left'});
        doc.moveDown(10);
        doc.font('Helvetica').fontSize(11).text("Thank you for engaging with teh Virtual Card Sort. We hope that your experience was a positive one. Feel free to revisit or share this link with others:                ", {align: 'center', continued: true}).fillColor('blue').text('http://blahblahblah', {underline: true, link: "https://www.onetonline.org/", continued: true}).fillColor('black').text(". ", {link: '', underline: false});
        doc.moveDown();
        doc.font('Helvetica').fontSize(11).text("Instructions for post-survey, printing, etc.")
        doc.end();
        stream.on('finish', function() {
            const url = stream.toBlobURL('application/pdf');
            console.log(url);
            window.open(url, '_blank');
        });
        
    });
}

var deck = [{category: "NUY", header: "Actor", hCode: "A", zone: 1, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/A_Actor.jpg", description: "Actor, Actress, Comedian, Comic, Community Theater Actor, Ensemble Member, Narrator, Performer, Tour Actor, Voice-Over Artist"},
    {category: "NUY", header: "Craft Artist", hCode: "A", zone: 3, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/A_Craft_Artist.jpg", description: "Artist, Ceramic Artist, Designer, Fiber Artist, Fine Craft Artist, Furniture Maker, Glass Artist, Glass Blower, Goldsmith, Hand-Weaver"},
    {category: "NUY", header: "Film/Video Editor", hCode: "A", zone: 3, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/A_Film_Video_Editor.jpg", description: "Assistant Film Editor, Editor, Film Editor, News Editor, News Video Editor, News Videotape Editor, Non-Linear Editor, Online Editor, Video Editor, Videographer"},
    {category: "NUY", header: "Multimedia Artist/Animator", hCode: "A", zone: 4, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/A_Multimedia_Artist_Animator.jpg", description: "3D Animator, 3D Artist, Animation Director, Animator, Art Director, Artist, Creative Director, Graphic Artist, Graphic Designer, Illustrator"},
    {category: "NUY", header: "Technical Writer", hCode: "A", zone: 4, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/A_Technical_Writer.jpg", description: "Documentation Designer, Documentation Specialist, Engineering Writer, Expert Medical Writer, Information Developer, Narrative Writer, Requirements Analyst, Senior Technical Writer, Technical Communicator, Technical Writer"},
    {category: "NUY", header: "Video Game Designer", hCode: "A", zone: 4, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/A_Video_Game_Designer.jpg", description: "Design Director, Designer/Writer, Game Designer, Game Designer/Creative Director, Lead Designer, Lead Game Designer, Lead Level Designer, Mid Level Game Designer, Senior Game Designer, World Designer"},
    {category: "NUY", header: "Actuary", hCode: "C", zone: 4, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/C_Actuary.jpg", description: "Actuarial Analyst, Actuarial Associate, Actuarial Consultant, Actuary, Consulting Actuary, Health Actuary, Pricing Actuary, Pricing Analyst, Product Development Actuary, Retirement Actuary"},
    {category: "NUY", header: "Archivist", hCode: "C", zone: 5, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/C_Archivist.jpg", description: "Archival Records Clerk, Archives Director, Archivist, Collections Director, Collections Manager, Manuscripts Curator, Museum Archivist, Records Manager, Registrar, University Archivist"},
    {category: "NUY", header: "Database Administrator", hCode: "C", zone: 4, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/C_Database_Administrator.jpg", description: "Data Architect, Database Administration Manager, Database Administrator (DBA), Database Analyst, Database Coordinator, Database Developer, Database Programmer, Information Systems Manager, Management Information Systems Director (MIS Director), System Administrator"},
    {category: "NUY", header: "Financial Analyst", hCode: "C", zone: 4, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/C_Financial_Analyst.jpg", description: "Analyst, Credit Products Officer, Equity Research Analyst, Financial Analyst, Investment Analyst, Planning Analyst, Portfolio Manager, Real Estate Analyst, Securities Analyst, Trust Officer"},
    {category: "NUY", header: "Information Security Analyst", hCode: "C", zone: 4, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/C_Information_Security_Analyst.jpg", description: "Data Security Administrator, Information Security Officer, Information Security Specialist, Information Systems Security Analyst, Information Systems Security Officer, Information Technology Security Analyst, Information Technology Specialist, Network Security Analyst, Security Analyst, Systems Analyst"},
    {category: "NUY", header: "Statistician", hCode: "C", zone: 5, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/C_Statistician.jpg", description: "Assistant Division Chief for Statistical Program Management, Clinical Statistics Manager, Human Resource Statistician, Private Statistical/Psychometric Consultant, Program Research Specialist, Senior Statistician, Statistical Analyst, Statistician (Demographer), Trend Investigator"},
    {category: "NUY", header: "Barista", hCode: "E", zone: 1, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/E_Barista.jpg", description: "Bar Manager, Barista, Catering Barista, Sales Associate"},
    {category: "NUY", header: "Curator", hCode: "E", zone: 5, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/E_Curator.jpg", description: "Collections Curator, Collections Manager, Curator, Education Curator, Exhibitions Curator, Gallery Director, Museum Curator, Photography Curator, Vertebrate Zoology Curator"},
    {category: "NUY", header: "General/Operations Manager", hCode: "E", zone: 4, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/E_General_Operations_Manager.jpg", description: "Business Manager, Facilities Manager, Facility Manager, General Manager (GM), Operations Director, Operations Manager, Plant Manager, Plant Superintendent, Production Manager, Store Manager"},
    {category: "NUY", header: "Instructional Designer/Technologist", hCode: "E", zone: 5, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/E_Instructional_Designer_Technologist.jpg", description: "Instructional Designer; Instructional Technologist; Instructional Technology Senior Analyst; Lead Performance Support Analyst; Learning Development Specialist; Senior Instructional Designer; Team Lead, Teacher Support and Student Intervention"},
    {category: "NUY", header: "Marketing Manager", hCode: "E", zone: 4, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/E_Marketing_Manager.jpg", description: "Account Supervisor, Brand Manager, Business Development Director, Business Development Manager, Commercial Lines Manager, Market Development Executive, Marketing Coordinator, Marketing Director, Marketing Manager, Product Manager"},
    {category: "NUY", header: "Public Relations/Fundraising Manager", hCode: "E", zone: 4, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/E_Public_Relations_Fundraising_Manager.jpg", description: "Account Executive, Account Supervisor, Annual Giving Director, Communications Director, Communications Manager, Community Relations Director, Development Director, Public Affairs Director, Public Relations Director, Public Relations Manager (PR Manager)"},
    {category: "NUY", header: "Cytogenic Technologist", hCode: "I", zone: 4, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/I_Cytogenic_Technologist.jpg", description: "Clinical Cytogeneticist Scientist (CCS); Clinical Laboratory Specialist in Cytogenetics (CLSp(CG)); Cytogenetic Technologist; Cytogenetics Laboratory Manager; Head of Cytogenetics; Lead Cytogenetic Technologist; Lead Technologist in Cytogenetics; Senior Cytogenetic Technologist; Senior Cytogenetics Laboratory Director; Technical Specialist, Cytogenetics"},
    {category: "NUY", header: "Dietician/Nutritionist", hCode: "I", zone: 5, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/I_Dietician_Nutritionist.jpg", description: "Clinical Dietician, Correctional Food Service Supervisor, Dietary Manager, Dietician, Nutritionist, Outpation Dietician, Pediatric Clinical Dietician, Registered Dietician, Registered Dietician"},
    {category: "NUY", header: "Marine Engineer", hCode: "I", zone: 4, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/I_Marine_Engineer.jpg", description: "Consulting Marine Engineer, Hull Outfit Supervisor, Marine Consultant, Marine Design Engineer, Marine Engineer, Marine Engineering Consultant, Marine Surveyor, Project Engineer, Propulsion Machinery Service Engineer, Ships Equipment Engineer"},
    {category: "NUY", header: "Orthodontist", hCode: "I", zone: 5, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/I_Orthodontist.jpg", description: "Board Certified Orthodontist; Orthodontist; Orthodontist, Small Business Owner; Orthodontist, Vice President; Specialist in Orthodontics and Dentofacial Orthopedics"},
    {category: "NUY", header: "Physicist", hCode: "I", zone: 5, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/I_Physicist.jpg", description: "Biophysics Scientist, Health Physicist, Physicist, Research Consultant, Research Physicist, Research Scientist, Scientist"},
    {category: "NUY", header: "Software Developer", hCode: "I", zone: 4, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/I_Software_Developer.jpg", description: "Application Developer, Application Integration Engineer, Applications Developer, Computer Consultant, Information Technology Analyst, Software Architect, Software Developer, Software Development Engineer, Software Engineer, Technical Consultant"},
    {category: "NUY", header: "Animal Trainer", hCode: "R", zone: 2, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/R_Animal_Trainer.jpg", description: "Agility Instructor, Dog Obedience Instructor, Dog Trainer, Guide Dog Instructor, Guide Dog Mobility Instructor (GDMI), Guide Dog Trainer, Horse Trainer, Racehorse Trainer, Service Dog Trainer, Trainer"},
    {category: "NUY", header: "Cartographer/Photogrammetrist", hCode: "R", zone: 4, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/R_Cartographer_Photogrammetrist.jpg", description: "Aerial Photogrammetrist, Cartographer, Cartographic Designer, Compiler, Digital Cartographer, Mapper, Photogrammetric Technician, Photogrammetrist, Stereo Compiler, Stereoplotter Operator"},
    {category: "NUY", header: "Civil Engineer", hCode: "R", zone: 4, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/R_Civil_Engineer.jpg", description: "Bridge/Structure Inspection Team Leader, City Engineer, Civil Engineer, Civil Engineering Manager, County Engineer, Design Engineer, Project Engineer, Railroad Design Consultant, Structural Engineer, Traffic Engineer"},
    {category: "NUY", header: "Museum Technician/Conservator", hCode: "R", zone: 4, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/R_Museum_Technician_Conservator.jpg", description: "Art Preparator, Conservation Technician, Conservator, Exhibit Technician, Museum Registrar, Museum Technician, Objects Conservator, Paintings Conservator, Paper Conservator, Preparator"},
    {category: "NUY", header: "Radiologic Technologist", hCode: "R", zone: 3, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/R_Radiologic_Technologist.jpg", description: "Computed Tomography Technologist (CT Technologist), Mammographer, Mammography Technologist, Radiographer, Radiologic Technologist (RT), Radiological Technologist, Radiology Technologist, Staff Technologist, X-Ray Technologist"},
    {category: "NUY", header: "Surveyer", hCode: "R", zone: 4, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/R_Surveyer.jpg", description: "City Surveyor, County Surveyor, Land Surveyor, Mine Surveyor, Registered Land Surveyor, Survey Manager, Survey Party Chief, Survey Project Manager, Survey Superintendent, Surveyor"},
    {category: "NUY", header: "Athletic Trainer", hCode: "S", zone: 5, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/S_Athletic_Trainer.jpg", description: "Assistant Athletic Trainer, Athletic Instructor, Athletic Trainer, Certified Athletic Trainer, Clinical Instructor, Graduate Assistant Athletic Trainer, Head Athletic Trainer, Head Athletic Trainer/Strength Coach, Resident Athletic Trainer"},
    {category: "NUY", header: "Counseling Psychologist", hCode: "S", zone: 5, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/S_Counseling_Psychologist.jpg", description: "Applied Behavior Science Specialist (ABSS), Chemical Dependency Therapist, Counseling Psychologist, Counseling Services Director, Counselor, Licensed Professional Counselor (LPC), Psychologist, Psychotherapist, Senior Staff Psychologist, Staff Psychologist"},
    {category: "NUY", header: "Elementary Teacher", hCode: "S", zone: 4, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/S_Elementary_Teacher.jpg", description: "Art Teacher, Classroom Teacher, Educator, Elementary Education Teacher, Elementary School Teacher, Elementary Teacher, Fifth Grade Teacher, First Grade Teacher, Second Grade Teacher, Teacher"},
    {category: "NUY", header: "Registered Nurse", hCode: "S", zone: 3, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/S_Registered_Nurse.jpg", description: "Charge Nurse, Director of Nursing (DON), Emergency Department Registered Nurse, Oncology Registered Nurse, Operating Room Registered Nurse, Public Health Nurse (PHN), Registered Nurse (RN), School Nurse, Staff Nurse, Staff Registered Nurse"},
    {category: "NUY", header: "Tour Guide/Escort", hCode: "S", zone: 3, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/S_Tour_Guide_Escort.jpg", description: "Discovery Guide, Docent, Guide, Historical Interpreter, Interpreter, Museum Educator, Museum Guide, Science Interpreter, Tour Escort, Tour Guide"},
    {category: "NUY", header: "Training/Development Specialist", hCode: "S", zone: 4, path: "/sites/g/files/upcbnu746/files/media/images/VCS/Front/S_Training_Development_Specialist.jpg", description: "Computer Training Specialist, Corporate Trainer, E-Learning Developer, Job Training Specialist, Management Development Specialist, Senior Instructor, Supervisory Training Specialist, Technical Trainer, Trainer, Training Specialist"}];

    const imgArrayBack = ["/sites/g/files/upcbnu746/files/media/images/VCS/Back/A_Back.jpg",
        "/sites/g/files/upcbnu746/files/media/images/VCS/Back/C_Back.jpg",
        "/sites/g/files/upcbnu746/files/media/images/VCS/Back/E_Back.jpg",
        "/sites/g/files/upcbnu746/files/media/images/VCS/Back/I_Back.jpg",
        "/sites/g/files/upcbnu746/files/media/images/VCS/Back/R_Back.jpg",
        "/sites/g/files/upcbnu746/files/media/images/VCS/Back/S_Back.jpg"];
   
    let indexFront = 1;
    let indexBack = 1;
    let modulo = 5;

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function page2Next() {
        var wcC = document.getElementById('wouldChoose');
        var wncC = document.getElementById('wouldNotChoose');
        var mcC = document.getElementById('mightChoose');

        var wcChildren = wcC.childNodes.length;
        var wncChildren = wncC.childNodes.length;
        var mcChildren = mcC.childNodes.length;

//        if (wcChildren + wncChildren + mcChildren != 45) {
//            console.log(wcChildren + wncChildren + mcChildren);
//            document.getElementById('errorMessageAllCards').style.display = "inline-block";
//            document.getElementById('errorMessageNoCardsWC').style.display = "none";
//            return;
//        }
//
//        else if (wcChildren <= 3) {
//            document.getElementById('errorMessageAllCards').style.display = "none";
//            document.getElementById('errorMessageNoCardsWC').style.display = "inline-block";
//            return;
//        }
//
//        else {
//            document.getElementById('errorMessageAllCards').style.display = "none";
//            document.getElementById('errorMessageNoCardsWC').style.display = "none";
//        }

        document.getElementById('hfWouldChooseCards').value = "";
        document.getElementById('hfWouldNotChooseCards').value = "";
        document.getElementById('hfMightChooseCards').value = "";

        console.log(wncChildren);

        var mightChooseArr=[], wouldChooseArr=[], wouldNotChooseArr=[], mightChooseHCode=[0,0,0,0,0,0], wouldChooseHCode=[0,0,0,0,0,0], 
                wouldNotChooseHCode=[0,0,0,0,0,0], mightChooseZone=[0,0,0,0,0,0], wouldChooseZone=[0,0,0,0,0,0], wouldNotChooseZone=[0,0,0,0,0,0];
        var k = 0;
        for (var i = wcChildren - 2; i >= 2; i--) {
            var j = wcC.childNodes[i].id.replace('acardFront', '') - 1;
            deck[j].category = "WC";
            wouldChooseArr[k] = deck[j];
            wouldChooseHCode[getHCodeIndex(wouldChooseArr[k].hCode)] += 1;
            wouldChooseZone[wouldChooseArr[k].zone - 1] += 1;
            k++;
        }
        console.log(wouldChooseArr);
        console.log(wouldChooseHCode);
        console.log(wouldChooseZone);
        k = 0;
        for (var i = wncChildren - 2; i >= 2; i--) {
            var j = wncC.childNodes[i].id.replace('acardFront', '') - 1
            deck[j].category = "WNC";
            wouldNotChooseArr[k] = deck[j];
            wouldNotChooseHCode[getHCodeIndex(wouldNotChooseArr[k].hCode)] += 1;
            wouldNotChooseZone[wouldNotChooseArr[k].zone - 1] += 1;
            k++;
        }
        console.log(wouldNotChooseArr);
        console.log(wouldNotChooseHCode);
        console.log(wouldNotChooseZone);
        k = 0;
        for (var i = mcChildren - 2; i >= 2; i--) {
            var j = mcC.childNodes[i].id.replace('acardFront', '') - 1;
            deck[j].category = "MC";
            mightChooseArr[k] = deck[j];
            mightChooseHCode[getHCodeIndex(mightChooseArr[k].hCode)] += 1;
            mightChooseZone[mightChooseArr[k].zone - 1] += 1;
            k++;
        }
        console.log(mightChooseArr);
        console.log(mightChooseHCode);
        console.log(mightChooseZone);
        getPdfs(wouldChooseArr, wouldNotChooseArr, mightChooseArr, wouldChooseHCode, wouldNotChooseHCode, mightChooseHCode, wouldChooseZone, wouldNotChooseZone, mightChooseZone);
    }
    
    function getHCodeIndex(code) {
        if (code == "A") return 0;
        else if (code == "C") return 1;
        else if (code == "E") return 2;
        else if (code == "I") return 3;
        else if (code == "R") return 4;
        else return 5;
    }
    
    function getHCode(index)
    {
        if (index == 0) return "A";
        else if (index == 1) return "C";
        else if (index == 2) return "E";
        else if (index == 3) return "I";
        else if (index == 4) return "R";
        else return "S";
    }
    

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        var target = document.getElementById(ev.target.id);
        while (target.id != 'wouldNotChoose' && target.id != 'mightChoose' && target.id != 'wouldChoose') {
            target = target.parentNode;
        }
        if (data != 'acardFront') {
            target.children[0].insertAdjacentElement('afterEnd', document.getElementById(data));
            return;
        }
        var element = document.getElementById(data); //a
        var img = element.cloneNode(true); //clone a with img
        element.id = element.id + indexFront;
        element.children[0].id = element.children[0].id + indexFront;
        element.style.marginBottom = "-160px";
        element.removeAttribute("data-text");
        element.children[0].style.marginBottom = "-160px";
        target.children[0].insertAdjacentElement('afterEnd', element);
        document.getElementById('notUsedYet').append(img);
        
        var imgFront = document.getElementById('cardFront');
        var imgBack = document.getElementById('cardBack');

        if (indexFront % modulo == 0) {
            if (indexBack < imgArrayBack.length) {
                imgBack.src = imgArrayBack[indexBack];
                indexBack++;
                modulo = 6 + indexFront;
            }
            else {
                imgBack.style.display = "none";
            }
        }
        if (indexFront < deck.length) {
            imgFront.src = deck[indexFront].path;
            document.getElementById(data).setAttribute("data-text", deck[indexFront].description);
            indexFront++;
        }
        else {
            imgFront.style.display = "none";
            imgFront.parentElement.style.display = "none";
            imgFront.parentElement.parentElement.style.display = "none";
        }
    }
    
    function genderSelfIdentify() {
            if (document.getElementById("ddlGender").value == "X") {
                document.getElementById("txtGender").style.display = "inline-block";
                document.getElementById("txtGender").value = "";
            }
            else {
                document.getElementById("txtGender").style.display = "none";
                document.getElementById("txtGender").value = $("#ddlGender option:selected").text();
                document.getElementById("reqTxtGender").style.display = "none";
            }
        }
        
        function raceSelfIdentify() {
            if (document.getElementById("ddlRace").value == "X") {
                document.getElementById("txtRace").style.display = "inline-block";
                document.getElementById("txtRace").value = "";
            }
            else {
                document.getElementById("txtRace").style.display = "none";
                document.getElementById("txtRace").value = $("#ddlRace option:selected").text();
                document.getElementById("reqTxtRace").style.display = "none";
            }
        }
        
        function page1Next() {
            //if (!page1Val()) {
                //document.getElementById("reqPage1").style.display = "block";
                //return;
            //}
            document.getElementById("reqPage1").style.display = "none";
            document.getElementById("page1").style.display = "none";
            document.getElementById("page2").style.display = "block";
        }
        
        
        function page1Val() {
            if (document.getElementById("txtAge").value == "") {
                document.getElementById("reqAge").style.display = "block";
                return false;
            }
            else document.getElementById("reqAge").style.display = "none";
            
            if (document.getElementById("ddlGender").value == "") {
                document.getElementById("reqGender").style.display = "block";
                return false;
            }
            else document.getElementById("reqGender").style.display = "none";
            
            if (document.getElementById("txtGender").value == "" && document.getElementById("ddlGender").value == "X") {
                document.getElementById("reqTxtGender").style.display = "block";
                return false;
            }
            else document.getElementById("reqTxtGender").style.display = "none";
            
            if (document.getElementById("ddlRace").value == "") {
                document.getElementById("reqRace").style.display = "block";
                return false;
            }
            else document.getElementById("reqRace").style.display = "none";
            
            if (document.getElementById("txtRace").value == "" && document.getElementById("ddlRace").value == "X") {
                document.getElementById("reqTxtRace").style.display = "block";
                return false;
            }
            else document.getElementById("reqTxtRace").style.display = "none";
            
            if (document.getElementById("ddlCountry").value == "") {
                document.getElementById("reqCountry").style.display = "block";
                return false;
            }
            else document.getElementById("reqCountry").style.display = "none";
            
            if (!document.getElementById("rblDisabilityY").checked && !document.getElementById("rblDisabilityN").checked)
            {
                document.getElementById("reqDisability").style.display = "block";
                return false;
            }
            else document.getElementById("reqDisability").style.display = "none";
            
            if (document.getElementById("ddlCurCarCon").value == "") {
                document.getElementById("reqCurCarCon").style.display = "block";
                return false;
            }
            else document.getElementById("reqCurCarCon").style.display = "none";
            
            if (document.getElementById("txtAccomplish").value == "") {
                document.getElementById("reqAccomplish").style.display = "block";
                return false;
            }
            else document.getElementById("reqAccomplish").style.display = "none";
            
            if (!document.getElementById("rblCarCon1").checked && !document.getElementById("rblCarCon2").checked 
                    && !document.getElementById("rblCarCon3").checked && !document.getElementById("rblCarCon4").checked && !document.getElementById("rblCarCon5").checked)
            {
                document.getElementById("reqCarCon").style.display = "block";
                return false;
            }
            else document.getElementById("reqCarCon").style.display = "none";
            
            if (!document.getElementById("rblCarGoa1").checked && !document.getElementById("rblCarGoa2").checked 
                    && !document.getElementById("rblCarGoa3").checked && !document.getElementById("rblCarGoa4").checked && !document.getElementById("rblCarGoa5").checked)
            {
                document.getElementById("reqCarGoa").style.display = "block";
                return false;
            }
            else document.getElementById("reqCarGoa").style.display = "none";
            
            if (!document.getElementById("rblCarNextSteps1").checked && !document.getElementById("rblCarNextSteps2").checked 
                    && !document.getElementById("rblCarNextSteps3").checked && !document.getElementById("rblCarNextSteps4").checked && !document.getElementById("rblCarNextSteps5").checked)
            {
                document.getElementById("reqCarNextSteps").style.display = "block";
                return false;
            }
            else document.getElementById("reqCarNextSteps").style.display = "none";
            
            if (document.getElementById("ddlCurCarDec").value == "") {
                document.getElementById("reqCurCarDec").style.display = "block";
                return false;
            }
            else document.getElementById("reqCurCarDec").style.display = "none";
            
            if (!document.getElementById("rblVIS1").checked && !document.getElementById("rblVIS2").checked 
                    && !document.getElementById("rblVIS3").checked && !document.getElementById("rblVIS4").checked && !document.getElementById("rblVIS5").checked)
            {
                document.getElementById("reqVIS").style.display = "block";
                return false;
            }
            else document.getElementById("reqVIS").style.display = "none";
            
            if (!document.getElementById("rblKnoOpt1").checked && !document.getElementById("rblKnoOpt2").checked 
                    && !document.getElementById("rblKnoOpt3").checked && !document.getElementById("rblKnoOpt4").checked && !document.getElementById("rblKnoOpt5").checked)
            {
                document.getElementById("reqKnoOpt").style.display = "block";
                return false;
            }
            else document.getElementById("reqKnoOpt").style.display = "none";
            
            if (!document.getElementById("rblDMS1").checked && !document.getElementById("rblDMS2").checked 
                    && !document.getElementById("rblDMS3").checked && !document.getElementById("rblDMS4").checked && !document.getElementById("rblDMS5").checked)
            {
                document.getElementById("reqDMS").style.display = "block";
                return false;
            }
            else document.getElementById("reqDMS").style.display = "none";
            
            if (!document.getElementById("rblAwareness1").checked && !document.getElementById("rblAwareness2").checked 
                    && !document.getElementById("rblAwareness3").checked && !document.getElementById("rblAwareness4").checked && !document.getElementById("rblAwareness5").checked)
            {
                document.getElementById("reqAwareness").style.display = "block";
                return false;
            }
            else document.getElementById("reqAwareness").style.display = "none";
            
            if (!document.getElementById("rblCCCC1").checked && !document.getElementById("rblCCCC2").checked 
                    && !document.getElementById("rblCCCC3").checked && !document.getElementById("rblCCCC4").checked && !document.getElementById("rblCCCC5").checked)
            {
                document.getElementById("reqCCCC").style.display = "block";
                return false;
            }
            else document.getElementById("reqCCCC").style.display = "none";
            
            if (!document.getElementById("rblExtFac1").checked && !document.getElementById("rblExtFac2").checked 
                    && !document.getElementById("rblExtFac3").checked && !document.getElementById("rblExtFac4").checked && !document.getElementById("rblExtFac5").checked)
            {
                document.getElementById("reqExtFac").style.display = "block";
                return false;
            }
            else document.getElementById("reqExtFac").style.display = "none";
            
            if (!document.getElementById("rblOverall1").checked && !document.getElementById("rblOverall2").checked 
                    && !document.getElementById("rblOverall3").checked && !document.getElementById("rblOverall4").checked && !document.getElementById("rblOverall5").checked)
            {
                document.getElementById("reqOverall").style.display = "block";
                return false;
            }
            else document.getElementById("reqOverall").style.display = "none";
            return true;
        }

