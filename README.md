# tri5mix – ROOT (v1.01)

tri5mix ist ein 5-Achsen-Dispatcher.  
Jede Achse sendet definierte Parameter an ein externes RESPO-System.

## Achsen
A1–A5 sind eigenständige Funktionspunkte mit:
- ID (A1-001 … A5-001)
- EICH (Positionsbestätigung)
- GEN (Herkunftsmarke)
- TECH (Achsen-Technik)
- ORT (EarthRoom)
- MODE (NC als Standard)

## Zweck
tri5mix dient als Startpunkt für:
- Fehlerweitergabe
- Achsen-Tests
- Funktionsaufrufe
- Kompatibilität zu ERROR v1.01

## Ausgabe
Alle Parameter werden per URL an error.html übertragen:
- active
- id
- eich
- gen
- tech
- ort
- mode

## Version
v1.01 – kompatibel zu ERROR v1.01  
Alte Aufrufe bleiben gültig.

