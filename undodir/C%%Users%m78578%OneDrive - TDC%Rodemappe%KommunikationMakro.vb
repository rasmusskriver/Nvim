Vim�UnDo� �P f���O��Lp�]�$�L(�C͜����   C       Columns("F").Delete                                fW�    _�                             ����                                                                                                                                                                                                                                                                                                                                       C           V        fW�     �       D       C   !Sub LavTilKommunikationVarsling()   "    Dim response As vbMsgBoxResult       f    response = MsgBox("Første alias skal være i kolonne G ",vbOKCancel + vbQuestion, "Bekræftelse")           If response = vbOK Then       #    ElseIf response = vbCancel Then       Exit Sub   
    End If           Columns("F").Delete     !    ''  Columns("D").Delete                 SkrivHovedmailOgAliaserNy       SletKanIkkeBruges           Columns("D").Delete               Columns.AutoFit       End Sub   Private Sub SletKanIkkeBruges()       Dim cell As Range       Dim rng As Range       0    ' Gennemgå hver celle i det aktive regneark   *    For Each cell In ActiveSheet.UsedRange   E        ' Tjek om cellens værdi indeholder teksten "kan.ikke.bruges"   ;        If InStr(1, cell.Value, "kan.ikke.bruges") > 0 Then   ;            ' Tilføj cellen til området, der skal slettes   "            If rng Is Nothing Then                   Set rng = cell               Else   *                Set rng = Union(rng, cell)               End If           End If       Next cell       >    ' Slet de celler, der indeholder teksten "kan.ikke.bruges"       If Not rng Is Nothing Then           rng.ClearContents   
    End If   End Sub   'Private Sub SkrivHovedmailOgAliaserNy()       Dim lastCol As Long       Dim i As Long       Dim headerText As String       Dim headerCol As Long   &    ' Find den sidste kolonne med data   V    lastCol = Cells.Find(What:="*", After:=Range("A1"), LookIn:=xlFormulas, LookAt:= _   Y        xlPart, SearchOrder:=xlByColumns, SearchDirection:=xlPrevious, MatchCase:=False _   %        , SearchFormat:=False).Column   "    ' Skriv "Hovedmail" i celle B1   %    Cells(1, "B").Value = "Hovedmail"   J    ' Loop gennem de resterende kolonner og skriv "Alias [n]" i hver celle   *    headerCol = 6 ' Startkolonne for Alias       For i = 6 To lastCol   W        If WorksheetFunction.CountA(Columns(i)) > 0 Then ' Tjek om kolonnen har indhold   "            ' Opret header teksten   1            headerText = "Alias " & headerCol - 5   7            ' Skriv header teksten i den aktuelle celle   2            Cells(1, headerCol).Value = headerText   %            headerCol = headerCol + 1           End If   
    Next i   End Sub5��                         �                     5�_�                             ����                                                                                                                                                                                                                                                                                                                                       C           V        fW�    �                    Columns("D").Delete    �                !    ''  Columns("D").Delete      �         C          Columns("F").Delete  5��                         #                     �                         ?                     �                         �                     5��