# Sprachvertraut UI / Design & Architecture Briefing

## Vision

„Sprachvertraut“ soll eine futuristische, technisch elegante Interface-Welt erzeugen.

Die Wirkung soll an digitale Infrastruktur erinnern:

- clean
- technisch
- ruhig
- kontrolliert
- hochwertig
- futuristisch, aber nicht cyberpunk-chaotisch

Das Interface soll sich wie ein lebendiges Netzwerk anfühlen, nicht wie ein dekorativer Hintergrund.

---

# Design Language

## Look & Feel

Zielästhetik:

- technische Präzision
- räumliche Tiefe
- Honeycomb-/Hexagon-Logik
- kontrollierte Lichtakzente
- reduzierte Farbpalette
- subtiler Glow statt Neon-Explosion

Wichtig:

- keine überladene Cyberpunk-Optik
- keine aggressiven Effekte
- keine unnötigen UI-Linien
- keine dekorativen Overlays

---

# Color System

## Base Background

```txt
#0D1B2A
```

Verwendung:
- globaler Hintergrund
- Hero Background
- dunkle Flächen
- Füllung zentraler Elemente

---

## Primary Hex Edges

```txt
#154C73
```

Verwendung:
- Standard-Hexagon-Kanten
- Grid-Linien
- primäre visuelle Struktur

---

## Highlight Edges

```txt
#D4A017
```

Verwendung:
- aktive Akzente
- Signalhighlights
- visuelle Betonung

---

## Rare Secondary Highlights

```txt
#8E6B1F
```

Verwendung:
- seltene subtile Akzente
- Tiefenwirkung
- Variation im Grid

---

# Header

## Layout

Header-Hintergrund:

```txt
#154C73
```

Zentrierter Titel:

```txt
Sprachvertraut >_
```

Eigenschaften:

- centered
- clean
- technisch
- ruhig
- nicht verspielt

---

# Navigation Concept

Unterhalb des Headers befindet sich ein Hexagon-Menü.

## Struktur

- 1 größeres Hexagon links
- danach 4 kleinere Hexagone

### Großes Hexagon

Eigenschaften:

- größer als die übrigen
- Fill:

```txt
#0D1B2A
```

- Outline sichtbar

### Kleine Hexagons

Eigenschaften:

- outline only
- Kantenfarbe:

```txt
#5FA8D3
```

- generische Platzhalter-Symbole

---

## Menü-Layout

Alternierende Anordnung.

Schematisch:

```txt
1      3
  2      4
```

Regeln:

- Hexagon 1 und 3 oben ausgerichtet
- Hexagon 2 und 4 unten ausgerichtet
- Unterkante von 1 und 3 liegt auf Höhe der Mitte von 2 und 4
- kleine Abstände zwischen den Hexagons

---

# Hexagon Background Grid

Ein globales Honeycomb-Grid.

Eigenschaften:

- regelmäßige Hexagons
- keine Füllung
- transparent innen
- nur Outlines
- keine Gaps zwischen Hexagons
- eher groß dimensioniert
- spätere Iteration: ~66 % kleiner

Farblogik:

Standard:

```txt
#154C73
```

Gelegentliche Highlights:

```txt
#D4A017
```

Seltene Highlights:

```txt
#8E6B1F
```

Wichtig:

Keine zufällige Farbexplosion.

Gold-Akzente sparsam einsetzen.

---

# Hero / Perspective Scene

## Grundidee

Eine immersive Hero-Section mit räumlicher Wirkung.

Keine echte 3D-Engine.

Ansatz:

```txt
2.5D Fake Perspective
```

---

## Center Hex

Das zentrale Textfeld ist ein regelmäßiges Hexagon.

Eigenschaften:

- frei positionierbar
- regelmäßiges Hexagon
- zentraler Fokuspunkt der Szene
- Ursprung sämtlicher Wandflächen

Wichtig:

Nicht fest zentriert.

Position muss flexibel sein.

Beispielinhalt:

```txt
Willkommen bei Sprachvertraut
Deine Plattform für Sprache, Verständnis und Verbindung.
```

---

## Tunnel / Wall Logic

Vom Center-Hex gehen exakt sechs Flächen aus.

Wichtig:

Nicht:

- zusätzliche Linien
- künstliche Trennwände
- dekorative Divider

Sondern:

- 6 echte Hexagon-Flächen
- ausschließlich aus Hexagons aufgebaut
- die Hexagons definieren die Geometrie selbst

Die Flächen laufen perspektivisch auf die sechs Kanten des Center-Hexagons zu.

---

## Perspective Rules

Die Hexagons bleiben regulär.

Nicht:

```txt
verzerrte Hexagons
```

Sondern:

```txt
perspektivisch projizierte Positionen
```

Effekte:

- Größenabnahme Richtung Zentrum
- Tiefenwirkung
- Fluchtpunktperspektive
- Tunnel-/Raumeindruck

---

# Technical Architecture

## Preferred Stack

```txt
React
+ SVG
+ Hex Graph Model
+ 2.5D Projection
```

Nicht empfohlen:

- CSS-only Hexagons
- DOM-only transforms
- Canvas-only rendering
- dekorative Background Pattern

---

# Core Principle

Das Zentrum bestimmt den Raum.

Nicht:

```txt
Tunnel bestimmt Zentrum
```

Sondern:

```txt
CenterHex → berechnet Szene
```

Beispielstruktur:

```js
centerHex = {
  x,
  y,
  radius
}
```

---

# Hex Graph Model

Das Grid ist semantisch.

Nicht dekorativ.

Jedes Hexagon existiert als echter Knoten.

## HexNode

```ts
type HexNode = {
  id: string
  center: Point
  vertices: Point[]
  edges: Edge[]
  neighbors: string[]
}
```

---

## Edge

```ts
type Edge = {
  id: string
  start: Point
  end: Point
  connectedHexes: string[]
}
```

---

# Future Features

## Signal / Impulse System

Langfristig sollen Signale über das Grid laufen.

Ziel:

```txt
A → B → C → D
```

über echte Hex-Kanten.

### Beispiele

- Ping
- Scan Wave
- Data Transfer
- Alert
- permanenter Glow
- Hover-Reaktionen
- Navigationspfade

---

# Why SVG

SVG wird bevorzugt, weil:

- echte Paths
- animierbare Kanten
- stroke animations
- gradients
- glows
- React-state-friendly
- interaktive Elemente
- adressierbare Edges

---

# Layer Architecture

```txt
DATA LAYER
↓
Hex graph structure

PROJECTION LAYER
↓
Perspective mapping

RENDER LAYER
↓
SVG generation

ANIMATION LAYER
↓
Signals / pulses / glows
```

---

# Guiding Principle

Das Grid ist kein Background Pattern.

Es ist eine lebendige technische Struktur.

Zielwirkung:

„digitale Infrastruktur mit Atmosphäre“
