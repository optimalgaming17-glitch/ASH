/* ===== Design tokens ===== */
:root {
    --bg - 1: #e9d9c8;
    --bg - 2: #c9d6e6;
    --bg - 3: #e3c9d6;
    --glass: rgba(255, 255, 255, 0.55);
    --glass - strong: rgba(255, 255, 255, 0.75);
    --card: rgba(255, 255, 255, 0.6);
    --card - border: rgba(255, 255, 255, 0.8);
    --text - dark: #1f2430;
    --text - muted: #6b7280;
    --accent - orange: #f5a623;
    --accent - orange - 2: #f7b955;
    --accent - blue: #4a90d9;
    --accent - green: #a8d5ba;
    --radius - xl: 28px;
    --radius - lg: 20px;
    --radius - md: 14px;
    --radius - full: 999px;
    --shadow - soft: 0 8px 30px rgba(31, 36, 48, 0.08);
    font - family: "Segoe UI", "Helvetica Neue", Arial, sans - serif;
}

* { box- sizing: border - box; }

body {
    margin: 0;
    color: var(--text - dark);
}

.app - bg {
    min - height: 100vh;
    padding: 24px;
    background:
    radial - gradient(circle at 15 % 20 %, var(--bg - 1) 0 %, transparent 45 %),
    radial - gradient(circle at 85 % 15 %, var(--bg - 2) 0 %, transparent 50 %),
    radial - gradient(circle at 60 % 90 %, var(--bg - 3) 0 %, transparent 55 %),
    #efe8e0;
    display: flex;
    justify - content: center;
}

.dashboard - shell {
    width: 100 %;
    max - width: 1100px;
}

/* ===== Top bar ===== */
.topbar {
    display: flex;
    align - items: center;
    gap: 16px;
    background: var(--glass - strong);
    backdrop - filter: blur(20px);
    border: 1px solid var(--card - border);
    border - radius: var(--radius - full);
    padding: 10px 18px;
    margin - bottom: 18px;
    box - shadow: var(--shadow - soft);
}

.user - chip {
    display: flex;
    align - items: center;
    gap: 10px;
    font - size: 15px;
    white - space: nowrap;
}

.avatar {
    width: 36px;
    height: 36px;
    border - radius: 50 %;
    object - fit: cover;
    background: #ddd;
}

.search - box {
    flex: 1;
    display: flex;
    align - items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.55);
    border - radius: var(--radius - full);
    padding: 8px 16px;
    color: var(--text - muted);
}

.search - box input {
    border: none;
    background: transparent;
    outline: none;
    flex: 1;
    font - size: 14px;
    color: var(--text - dark);
}

.icon - sm { width: 16px; height: 16px; color: var(--text - muted); }

.theme - toggle {
    display: flex;
    background: rgba(255, 255, 255, 0.5);
    border - radius: var(--radius - full);
    padding: 4px;
}

.theme - btn {
    border: none;
    background: transparent;
    padding: 8px 16px;
    border - radius: var(--radius - full);
    font - size: 13px;
    cursor: pointer;
    color: var(--text - muted);
}

.theme - btn.active {
    background: #fff;
    color: var(--text - dark);
    box - shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.bell - btn {
    border: none;
    background: rgba(255, 255, 255, 0.5);
    width: 40px;
    height: 40px;
    border - radius: 50 %;
    cursor: pointer;
    font - size: 16px;
}

/* ===== Panel & cards ===== */
.panel {
    background: var(--glass);
    backdrop - filter: blur(24px);
    border: 1px solid var(--card - border);
    border - radius: var(--radius - xl);
    padding: 22px;
    box - shadow: var(--shadow - soft);
}

.row { display: flex; gap: 18px; }
.row - top { margin - bottom: 18px; }
.row - mid { align - items: stretch; }

.card {
    background: var(--card);
    border: 1px solid var(--card - border);
    border - radius: var(--radius - lg);
    padding: 18px;
}

.card - title {
    display: flex;
    align - items: center;
    gap: 8px;
    font - weight: 600;
    font - size: 14px;
    margin - bottom: 12px;
}

.badge {
    width: 26px;
    height: 26px;
    border - radius: 50 %;
    display: inline - flex;
    align - items: center;
    justify - content: center;
    font - size: 13px;
    background: #fff;
}
.badge - blue { background: #dceeff; }
.badge - orange { background: #ffe8c2; }
.badge - yellow { background: #fff3c4; }

/* Date card */
.date - card { flex: 1.1; }
.date - label { color: var(--text - muted); font - size: 13px; margin - bottom: 10px; }
.date - time { font - size: 34px; font - weight: 700; display: flex; align - items: baseline; gap: 10px; }
.date - time.temp { font - size: 16px; font - weight: 500; color: var(--text - muted); }

/* Humidity card */
.humidity - card { flex: 1; }
.humidity - row { display: flex; align - items: center; gap: 14px; }
.donut {
    width: 46px; height: 46px; border - radius: 50 %;
    background: conic - gradient(var(--accent - blue) calc(var(--pct) * 1 %), #e6ecf3 0);
    position: relative;
}
.donut::after {
    content: "";
    position: absolute; inset: 6px;
    background: var(--glass - strong);
    border - radius: 50 %;
}
.humidity - value { font - size: 26px; font - weight: 700; }

/* Consumption card */
.consumption - card { flex: 1.6; }
.bars {
    display: flex;
    align - items: flex - end;
    gap: 10px;
    height: 90px;
    position: relative;
    padding - left: 26px;
}
.scale {
    position: absolute; left: 0;
    font - size: 10px; color: var(--text - muted);
}
.scale: nth - of - type(1) { top: -4px; }
.scale: nth - of - type(2) { top: 30px; }
.scale: nth - of - type(3) { bottom: 14px; }
.scale - right { left: auto; right: 0; top: -4px; }
.bar - col { display: flex; flex - direction: column; align - items: center; gap: 6px; flex: 1; }
.bar {
    width: 10px;
    background: var(--accent - green);
    border - radius: 6px;
    position: relative;
}
.bar - active { background: var(--accent - orange); }
.bar - tip {
    position: absolute; top: -20px; left: 50 %; transform: translateX(-50 %);
    background: var(--accent - orange); color: #fff; font - size: 9px;
    padding: 2px 6px; border - radius: 6px; white - space: nowrap;
}
.bar - label { font - size: 10px; color: var(--text - muted); }

/* Device small cards */
.col - stack { display: flex; flex - direction: column; gap: 18px; flex: 0.85; }
.device - card {
    display: flex; flex - direction: column; justify - content: space - between;
    min - height: 110px;
}
.device - name { font - weight: 600; font - size: 15px; line - height: 1.3; }
.device - toggle {
    align - self: flex - start;
    border: none;
    background: #fff3c4;
    border - radius: var(--radius - full);
    padding: 6px 12px;
    font - size: 12px;
    cursor: pointer;
    margin - top: 10px;
}
.device - toggle.off { background: #eee; color: var(--text - muted); }

/* Lighting card */
.lighting - card { flex: 1.5; display: flex; flex - direction: column; align - items: center; }
.watt - row { display: flex; gap: 8px; width: 100 %; margin - bottom: 14px; }
.watt - btn {
    flex: 1; border: none; background: #fff; border - radius: var(--radius - full);
    padding: 8px 0; font - size: 12px; cursor: pointer; color: var(--text - muted);
}
.watt - btn.active { background: var(--accent - orange); color: #fff; font - weight: 600; }

.lighting - gauge { margin: 6px 0 14px; }
.ring {
    width: 130px; height: 130px; border - radius: 50 %;
    background: conic - gradient(var(--accent - orange) calc(var(--pct) * 1 %), #eee 0);
    display: flex; align - items: center; justify - content: center;
}
.ring - center {
    width: 96px; height: 96px; border - radius: 50 %;
    background: var(--glass - strong);
    display: flex; flex - direction: column; align - items: center; justify - content: center;
}
.ring - value { font - size: 22px; font - weight: 700; }
.ring - label { font - size: 11px; color: var(--text - muted); }

.minmax - row {
    display: flex; justify - content: space - between; width: 100 %;
    font - size: 12px; color: var(--text - muted); margin - bottom: 14px;
}
.mode - row { display: flex; gap: 14px; }
.mode - btn {
    width: 40px; height: 40px; border - radius: 50 %; border: none;
    background: #fff; cursor: pointer; font - size: 16px;
}
.mode - btn.active { background: var(--text - dark); color: #fff; }
.mode - labels { display: flex; gap: 22px; font - size: 11px; color: var(--text - muted); margin - top: 6px; }

/* Thermostat card */
.thermostat - card { flex: 1.5; }
.card - title - row { display: flex; justify - content: space - between; align - items: center; }
.thermo - gauge { position: relative; display: flex; justify - content: center; margin: 10px 0 16px; }
.thermo - ring {
    width: 150px; height: 150px; border - radius: 50 %;
    background: conic - gradient(var(--accent - orange) calc(var(--pct) * 1 %), #e9eef1 0);
    display: flex; align - items: center; justify - content: center;
}
.thermo - center {
    width: 108px; height: 108px; border - radius: 50 %;
    background: var(--glass - strong);
    display: flex; align - items: center; justify - content: center;
    font - size: 26px;
}
.thermo - value { position: absolute; top: 8px; right: 6px; font - size: 24px; font - weight: 700; }
.thermo - min { position: absolute; bottom: 4px; left: 4px; font - size: 12px; color: var(--text - muted); }
.thermo - max { position: absolute; bottom: 4px; right: 4px; font - size: 12px; color: var(--text - muted); }

.swing - auto - row { display: flex; justify - content: space - between; margin - bottom: 14px; font - size: 13px; }
.switch-item { display: flex; align - items: center; gap: 8px; }

.switch { position: relative; display: inline - block; width: 38px; height: 20px; }
    .switch input { opacity: 0; width: 0; height: 0; }
.slider {
    position: absolute; cursor: pointer; inset: 0;
    background: #ddd; border - radius: var(--radius - full); transition: .2s;
}
.slider::before {
    content: ""; position: absolute; height: 16px; width: 16px; left: 2px; top: 2px;
    background: #fff; border - radius: 50 %; transition: .2s;
}
.switch input:checked + .slider { background: #6b5bff; }
.switch input:checked + .slider::before { transform: translateX(18px); }

.watt - panel {
    display: flex; justify - content: space - between; align - items: center;
    background: rgba(255, 255, 255, 0.6); border - radius: var(--radius - md);
    padding: 12px 16px;
}
.watt - panel - value { font - weight: 700; font - size: 15px; }
.watt - panel - sub { font - size: 11px; color: var(--text - muted); }
.chevron { font - size: 18px; color: var(--text - muted); }

/* ===== Room tabs ===== */
.room - tabs {
    display: flex;
    justify - content: center;
    gap: 10px;
    margin - top: 20px;
    flex - wrap: wrap;
}
.room - tab {
    border: none;
    background: var(--glass - strong);
    padding: 10px 20px;
    border - radius: var(--radius - full);
    font - size: 13px;
    cursor: pointer;
    color: var(--text - muted);
}
.room - tab.active { background: #fff; color: var(--text - dark); font - weight: 600; }
.room - add { width: 40px; padding: 10px 0; font - size: 16px; }

/* ===== Dark theme ===== */
body.dark {
    --glass: rgba(30, 33, 43, 0.6);
    --glass - strong: rgba(40, 44, 56, 0.8);
    --card: rgba(45, 49, 63, 0.65);
    --card - border: rgba(255, 255, 255, 0.08);
    --text - dark: #f1f2f6;
    --text - muted: #9aa0ac;
}
body.dark.app - bg {
    background:
    radial - gradient(circle at 15 % 20 %, #3a3550 0 %, transparent 45 %),
        radial - gradient(circle at 85 % 15 %, #2c3a4d 0 %, transparent 50 %),
        radial - gradient(circle at 60 % 90 %, #4a3346 0 %, transparent 55 %),
    #14161f;
}

/* ===== Responsive ===== */
@media(max - width: 900px) {
  .row { flex - wrap: wrap; }
  .row - mid { flex - direction: column; }
  .col - stack { flex - direction: row; }
}
@media(max - width: 560px) {
  .topbar { flex - wrap: wrap; border - radius: var(--radius - lg); }
  .col - stack { flex - direction: column; }
  .date - time { font - size: 26px; }
}