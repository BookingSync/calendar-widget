# Skew Theme CSS Recipe

The widget now ships with **basic theme only**.

If you want the previous skew visual style, set `data-theme="skew"` on the widget container and add this CSS to your host app:

```css
:root {
  --smily-calendar-disabled-bg-color: #f0f0f0;
  --smily-calendar-disabled-color: #bfbfbf;
  --smily-calendar-highlighted-bg-color: #8aa9f8;
  --smily-calendar-highlighted-color: #3a3a3a;
  --smily-calendar-invalid-bg-color: #e3e3e3;
  --smily-calendar-invalid-color: #b3b3b3;
}

.SmilyCalendar__calendar[data-theme="skew"] .SmilyCalendar__cell:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.SmilyCalendar__calendar[data-theme="skew"] .SmilyCalendar__cell:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.SmilyCalendar__calendar[data-theme="skew"] .SmilyCalendar__cell::before,
.SmilyCalendar__calendar[data-theme="skew"] .SmilyCalendar__cell::after {
  position: absolute;
  display: block;
  width: 100%;
  margin: 0;
  content: "";
  transform: skew(-30deg);
  border-radius: 6px;
  z-index: 0;
  height: calc(100% + 2px);
  top: -1px;
}

.SmilyCalendar__calendar[data-theme="skew"] .SmilyCalendar__cell::before {
  left: -55%;
}

.SmilyCalendar__calendar[data-theme="skew"] .SmilyCalendar__cell::after {
  left: 55%;
}

.SmilyCalendar__calendar[data-theme="skew"] [data-disabled="left"]::after {
  background: var(--smily-calendar-disabled-bg-color);
}

.SmilyCalendar__calendar[data-theme="skew"] [data-disabled="center"] {
  background: var(--smily-calendar-disabled-bg-color);
  color: var(--smily-calendar-disabled-color);
}

.SmilyCalendar__calendar[data-theme="skew"] [data-disabled="center"]::before,
.SmilyCalendar__calendar[data-theme="skew"] [data-disabled="center"]::after {
  display: none;
  background: var(--smily-calendar-disabled-bg-color);
}

.SmilyCalendar__calendar[data-theme="skew"] [data-disabled="right"]::before {
  background: var(--smily-calendar-disabled-bg-color);
}

.SmilyCalendar__calendar[data-theme="skew"] [data-highlighted="left"]::after {
  display: block;
  background: var(--smily-calendar-highlighted-bg-color);
}

.SmilyCalendar__calendar[data-theme="skew"] [data-highlighted="center"] {
  background: var(--smily-calendar-highlighted-bg-color);
  color: var(--smily-calendar-highlighted-color);
}

.SmilyCalendar__calendar[data-theme="skew"] [data-highlighted="center"]::before,
.SmilyCalendar__calendar[data-theme="skew"] [data-highlighted="center"]::after {
  display: none;
  background: var(--smily-calendar-highlighted-bg-color);
}

.SmilyCalendar__calendar[data-theme="skew"] [data-highlighted="right"]::before {
  display: block;
  background: var(--smily-calendar-highlighted-bg-color);
}

.SmilyCalendar__calendar[data-theme="skew"] [data-invalid="left"] {
  background: none;
}

.SmilyCalendar__calendar[data-theme="skew"] [data-invalid="left"]::before {
  display: block;
}

.SmilyCalendar__calendar[data-theme="skew"] [data-invalid="left"]::after {
  display: block;
  background: var(--smily-calendar-invalid-bg-color);
}

.SmilyCalendar__calendar[data-theme="skew"] [data-invalid="center"] {
  background: var(--smily-calendar-invalid-bg-color);
  color: var(--smily-calendar-invalid-color);
}

.SmilyCalendar__calendar[data-theme="skew"] [data-invalid="center"]::before,
.SmilyCalendar__calendar[data-theme="skew"] [data-invalid="center"]::after {
  display: none;
  background: var(--smily-calendar-invalid-bg-color);
}

.SmilyCalendar__calendar[data-theme="skew"] [data-invalid="right"] {
  background: none;
}

.SmilyCalendar__calendar[data-theme="skew"] [data-invalid="right"]::before {
  display: block;
  background: var(--smily-calendar-invalid-bg-color);
}

.SmilyCalendar__calendar[data-theme="skew"] [data-invalid="right"]::after {
  display: block;
}

.SmilyCalendar__direct[data-theme="skew"] [data-hovered] {
  background: none;
}

.SmilyCalendar__direct[data-theme="skew"] [data-hovered]::before {
  display: block;
}

.SmilyCalendar__direct[data-theme="skew"] [data-hovered]::after {
  display: block;
  background: var(--smily-calendar-highlighted-bg-color);
}

.SmilyCalendar__direct[data-theme="skew"] [data-hovered-offset] {
  background: none;
}

.SmilyCalendar__direct[data-theme="skew"] [data-hovered-offset]::before {
  display: block;
  background: var(--smily-calendar-highlighted-bg-color);
}

.SmilyCalendar__direct[data-theme="skew"] [data-hovered-offset]::after {
  display: block;
}

.SmilyCalendar__reversed[data-theme="skew"] [data-hovered] {
  background: none;
}

.SmilyCalendar__reversed[data-theme="skew"] [data-hovered]::before {
  display: block;
  background: var(--smily-calendar-highlighted-bg-color);
}

.SmilyCalendar__reversed[data-theme="skew"] [data-hovered]::after {
  display: block;
}

.SmilyCalendar__reversed[data-theme="skew"] [data-hovered-offset] {
  background: none;
}

.SmilyCalendar__reversed[data-theme="skew"] [data-hovered-offset]::before {
  display: block;
}

.SmilyCalendar__reversed[data-theme="skew"] [data-hovered-offset]::after {
  display: block;
  background: var(--smily-calendar-highlighted-bg-color);
}
```
