Vim�UnDo� �
�N���p�X.�C�9��)���JI�^�@g3]   ,                                  fr��    _�                             ����                                                                                                                                                                                                                                                                                                                                                          fr�     �                   �               5��                                                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                         fr�     �                a5VwfUytbn!d5��                                                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                         fr�     �                  5��                                                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                          fr�      �                   �               5��                   8                      	      5�_�                            ����                                                                                                                                                                                                                                                                                                                                       9                   fr�%     �                  5��                                                  5�_�                            ����                                                                                                                                                                                                                                                                                                                               .       8          V   4    fr��    �         8        5��                          �                      5�_�                            ����                                                                                                                                                                                                                                                                                                                                       8           V        fr��     �                   �               �              8   /function main(workbook: ExcelScript.Workbook) {   3  // Definerer de nødvendige objekter og variabler   4  let selectedSheet = workbook.getActiveWorksheet();   ;  let lastRow = selectedSheet.getRange("H:H").getLastRow();       8  // Tilføjer tekst til tomme LinkIT-celler i kolonne I   +  addTextToEmptyLinkITCells(selectedSheet);   k  workbook.getApplication().getWindow().showMessage("Der er tilføjet tekst til tomme LinkIT i kolonne I");       A  // Deaktiverer opdatering og beregning for at forbedre ydeevnen   j  workbook.getApplication().getActiveWorkbook().getCalculationMode() = ExcelScript.CalculationMode.manual;   L  workbook.getApplication().getActiveWorkbook().getScreenUpdating() = false;       <  // Indlæser unikke værdier fra kolonne B i et dictionary   (  let dict: { [key: string]: any } = {};   &  for (let i = 1; i <= lastRow; i++) {   K    let value = selectedSheet.getRangeByIndexes(i - 1, 1, 1, 1).getValue();   &    if (!dict.hasOwnProperty(value)) {         dict[value] = null;       }     }       7  // Gennemgår hver celle i kolonne H fra bund til top   &  for (let i = lastRow; i >= 1; i--) {   O    let cellValue = selectedSheet.getRangeByIndexes(i - 1, 7, 1, 1).getValue();   *    if (!dict.hasOwnProperty(cellValue)) {   _      selectedSheet.getRangeByIndexes(i - 1, 7, 1, 2).clear(ExcelScript.ClearApplyTo.contents);       }     }       &  // Fjerner tomme celler i hele arket   �  selectedSheet.getRange("A1").getWorksheet().getUsedRange().getSpecialCells(ExcelScript.SpecialCellType.blanks).delete(ExcelScript.DeleteShiftDirection.up);       )  // Genaktiverer opdatering og beregning   h  workbook.getApplication().getActiveWorkbook().getCalculationMode() = ExcelScript.CalculationMode.auto;   K  workbook.getApplication().getActiveWorkbook().getScreenUpdating() = true;         countLinkITCells();   8  selectedSheet.getRange("A:Z").format.autofitColumns();   }       E// Funktion til at tilføje tekst til tomme LinkIT-celler i kolonne I   Bfunction addTextToEmptyLinkITCells(sheet: ExcelScript.Worksheet) {   $  let range = sheet.getRange("I:I");   !  let values = range.getValues();   +  for (let i = 0; i < values.length; i++) {   4    if (!values[i][0]) { // Tjekker om cellen er tom   2      range.getCell(i, 0).setValue("Text to add");       }     }   }       ?// Funktion til at tælle LinkIT-celler (tilpasses efter behov)   function countLinkITCells() {   ;  // Implementér din logik for at tælle LinkIT-celler her   }5��            8                      	             �                    ?                       �	      5�_�      	              	        ����                                                                                                                                                                                                                                                                                                                            	           #           V        fr��     �      	          9    // Create a dictionary of unique values from column B   )    let uniqueValues = new Set<string>();   N    let lastRow: number = sheet.getUsedRange().getLastRow().getRowIndex() + 1;   f    let columnBValues: (string | number | boolean)[][] = sheet.getRange(`B2:B${lastRow}`).getValues();       &    for (let value of columnBValues) {   -        uniqueValues.add(value[0] as string);       }       i    // Iterate through column H and clear cells in column H and I where value in H is not in uniqueValues   f    let columnHValues: (string | number | boolean)[][] = sheet.getRange(`H2:H${lastRow}`).getValues();   (    for (let i = lastRow; i >= 2; i--) {   B        let cellValue: string = columnHValues[i - 2][0] as string;   +        if (!uniqueValues.has(cellValue)) {   S            sheet.getRange(`H${i}:I${i}`).clear(ExcelScript.ClearApplyTo.contents);   	        }       }       ,    // Remove empty cells in the whole sheet       removeEmptyCells(sheet);           // Adjust column widths   6    sheet.getUsedRange().getFormat().autofitColumns();       (    console.log("Completed the script");   }    5��                                              5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                       $           V        fr�     �                    .// Function to remove empty cells in the sheet   9function removeEmptyCells(sheet: ExcelScript.Worksheet) {   <    let usedRange: ExcelScript.Range = sheet.getUsedRange();   H    let values: (string | number | boolean)[][] = usedRange.getValues();       8    for (let row = values.length - 1; row >= 0; row--) {   A        for (let col = values[row].length - 1; col >= 0; col--) {   $            if (!values[row][col]) {   d                sheet.getRangeByIndexes(row, col, 1, 1).delete(ExcelScript.DeleteShiftDirection.up);               }   	        }       }   }5��                          m                    5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                  v   A    fr�=     �                 }�               5��                         l                     5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                  v   A    fr�B     �                 }}5��                         l                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  v       fr��     �             5��                          m                     �                          m                     �                          m                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  v       fr��     �             5��                          n                     �                          n                     �                          n                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  v       fr��     �             5��                          o                     �                          o                     �                          o                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                          fr��     �      +          �             5��                      >   n              *      5�_�                             ����                                                                                                                                                                                                                                                                                                                                       *   =               fr��    �         ,      @   let searchRange = sheet.getRange("B2:B1900"); // Søgeområde5��                          n                     5�_�                            ����                                                                                                                                                                                                                                                                                                                            ,                      v       fr��     �             �               /function main(workbook: ExcelScript.Workbook) {   .    let sheet = workbook.getActiveWorksheet();       A    let searchRange = sheet.getRange("B2:B1900"); // Søgeområde   _    let lookupRange = sheet.getRange("I2:J466167"); // Område med værdier der skal slås op i       H    // Filtrér værdier i kolonne I baseret på betingelsen i kolonne B   @    let filteredValues = lookupRange.getValues().filter(row => {   9        let searchValue = row[0]; // Værdi fra kolonne I   o        return searchRange.getValues().flat().includes(searchValue); // Tjek om værdien findes i søgeområdet       });       V    // Returnér værdien fra kolonne J for de matchende rækker, ellers "Ikke fundet"   J    let resultValues = filteredValues.map(row => row[1] || "Ikke fundet");       6    // Skriv resultaterne til kolonne K (for eksempel)   I    let resultRange = sheet.getRange("K2:K" + (resultValues.length + 1));   >    resultRange.setValues(resultValues.map(value => [value]));   }5��                         n              �      5�_�                    
   A    ����                                                                                                                                                                                                                                                                                                                                                  v       fr��     �   
             5��    
                      �                     �    
                      �                     �    
                      �                     5��