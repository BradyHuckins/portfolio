// ===========================
// STATE
// ===========================
let currentView = 'dashboard';
let currentModal = null;
let editingId = null;
let deleteTarget = null;
let invCatFilter = 'All';
let searchTerm = '';

const now = new Date();
let calYear = now.getFullYear();
let calMonth = now.getMonth();
let selectedDate = now.toISOString().split('T')[0];

// ===========================
// CONSTANTS
// ===========================
const STATUSES = ['Confirmed', 'Pending', 'Cancelled'];
const STATUS_CLASS = { Confirmed: 'badge-green', Pending: 'badge-amber', Cancelled: 'badge-red' };
const SERVICES = ['Consultation', 'Full Service', 'Express Service', 'Premium Package', 'Follow-up'];
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const CAT_ICONS = { Equipment: 'ti-device-laptop', Supplies: 'ti-clipboard', Products: 'ti-package', Software: 'ti-code' };
const CAT_COLORS = { Equipment: 'rgba(59,130,246,0.12)', Supplies: 'rgba(34,197,94,0.12)', Products: 'rgba(245,158,11,0.12)', Software: 'rgba(168,85,247,0.12)' };
const CAT_TEXT = { Equipment: '#60a5fa', Supplies: '#22c55e', Products: '#f59e0b', Software: '#a855f7' };

// ===========================
// SEED DATA
// ===========================
let bookings = [
  { id: 1, client: 'Sarah Mitchell', service: 'Full Service', date: '2025-05-19', time: '10:00', status: 'Confirmed', notes: 'Prefers morning slots' },
  { id: 2, client: 'James Okafor', service: 'Consultation', date: '2025-05-19', time: '14:30', status: 'Confirmed', notes: '' },
  { id: 3, client: 'Priya Nair', service: 'Premium Package', date: '2025-05-22', time: '11:00', status: 'Pending', notes: 'Call to confirm' },
  { id: 4, client: 'Carlos Reyes', service: 'Express Service', date: '2025-05-23', time: '09:00', status: 'Confirmed', notes: '' },
  { id: 5, client: 'Emma Liu', service: 'Follow-up', date: '2025-05-15', time: '15:00', status: 'Cancelled', notes: 'Rescheduling' },
  { id: 6, client: 'Noah Brennan', service: 'Consultation', date: '2025-05-28', time: '13:00', status: 'Pending', notes: 'New client' },
];

let inventory = [
  { id: 1, name: 'Laptop Pro 15"', category: 'Equipment', qty: 8, maxQty: 10, price: 1299, sku: 'EQ-001' },
  { id: 2, name: 'Desk Chair Ergonomic', category: 'Equipment', qty: 15, maxQty: 20, price: 449, sku: 'EQ-002' },
  { id: 3, name: 'A4 Paper (500 sheets)', category: 'Supplies', qty: 3, maxQty: 50, price: 12, sku: 'SP-001' },
  { id: 4, name: 'Blue Pens (Box/12)', category: 'Supplies', qty: 22, maxQty: 30, price: 8, sku: 'SP-002' },
  { id: 5, name: 'Hand Sanitiser 500ml', category: 'Products', qty: 11, maxQty: 25, price: 6, sku: 'PR-001' },
  { id: 6, name: 'Project Management SaaS', category: 'Software', qty: 5, maxQty: 5, price: 99, sku: 'SW-001' },
  { id: 7, name: 'USB-C Hub 7-port', category: 'Equipment', qty: 6, maxQty: 10, price: 59, sku: 'EQ-003' },
  { id: 8, name: 'Notebook A5 (Pack/3)', category: 'Supplies', qty: 18, maxQty: 40, price: 14, sku: 'SP-003' },
];

let clients = [
  { id: 1, name: 'Sarah Mitchell', email: 'sarah.m@email.com', phone: '(555) 201-0311' },
  { id: 2, name: 'James Okafor', email: 'james.o@email.com', phone: '(555) 340-9821' },
  { id: 3, name: 'Priya Nair', email: 'priya.n@email.com', phone: '(555) 419-5530' },
  { id: 4, name: 'Carlos Reyes', email: 'carlos.r@email.com', phone: '(555) 578-2294' },
  { id: 5, name: 'Emma Liu', email: 'emma.l@email.com', phone: '(555) 667-8812' },
  { id: 6, name: 'Noah Brennan', email: 'noah.b@email.com', phone: '(555) 723-4490' },
];

let nextId = { bookings: 100, inventory: 100, clients: 100 };

// ===========================
// VIEW SWITCHING
// ===========================
function showView(view, el) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('view-' + view).classList.add('active');
  if (el) el.classList.add('active');
  currentView = view;

  const titles = {
    dashboard: ['Dashboard', 'Overview & quick stats'],
    bookings:  ['Bookings', 'Manage appointments & calendar'],
    inventory: ['Inventory', 'Track stock & products'],
    clients:   ['Clients', 'Client directory'],
  };
  const t = titles[view] || [view, ''];
  document.getElementById('pageTitle').textContent = t[0];
  document.getElementById('pageSub').textContent = t[1];

  const addLabels = { bookings: 'Add Booking', inventory: 'Add Item', clients: 'Add Client' };
  const addBtn = document.getElementById('addBtn');
  if (addLabels[view]) {
    addBtn.style.display = '';
    addBtn.innerHTML = `<i class="ti ti-plus"></i> ${addLabels[view]}`;
  } else {
    addBtn.style.display = 'none';
  }

  if (view === 'bookings') renderCalendar();
  renderView(view);
}

function renderView(view) {
  if (view === 'dashboard') renderDashboard();
  else if (view === 'bookings') renderBookingsTable();
  else if (view === 'inventory') renderInventory();
  else if (view === 'clients') renderClients();
}

// ===========================
// DASHBOARD
// ===========================
function renderDashboard() {
  document.getElementById('stat-bookings').textContent = bookings.length;
  document.getElementById('stat-inventory').textContent = inventory.length;
  document.getElementById('stat-clients').textContent = clients.length;

  const rev = bookings.filter(b => b.status === 'Confirmed').length * 180;
  document.getElementById('stat-revenue').textContent = '$' + rev.toLocaleString();
  document.getElementById('bcount').textContent = bookings.filter(b => b.status === 'Confirmed').length;

  const recent = [...bookings].sort((a, b) => b.id - a.id).slice(0, 5);
  document.getElementById('dash-recent').innerHTML = recent.map(b => `
    <tr>
      <td class="cell-name">${b.client}</td>
      <td>${b.service}</td>
      <td class="cell-mono">${b.date} ${b.time}</td>
      <td><span class="badge ${STATUS_CLASS[b.status] || 'badge-blue'}">${b.status}</span></td>
    </tr>
  `).join('');
}

// ===========================
// BOOKINGS TABLE
// ===========================
function renderBookingsTable() {
  const filter = document.getElementById('bookingFilter').value;
  const data = bookings.filter(b => {
    const matchFilter = !filter || b.status === filter;
    const matchSearch = !searchTerm || b.client.toLowerCase().includes(searchTerm) || b.service.toLowerCase().includes(searchTerm);
    return matchFilter && matchSearch;
  });

  document.getElementById('bookings-tbody').innerHTML = data.length ? data.map(b => `
    <tr>
      <td class="cell-name">${b.client}</td>
      <td>${b.service}</td>
      <td class="cell-mono">${b.date} ${b.time}</td>
      <td><span class="badge ${STATUS_CLASS[b.status] || 'badge-blue'}">${b.status}</span></td>
      <td style="color:var(--muted);font-size:12px;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.notes || '—'}</td>
      <td>
        <div class="row-actions">
          <button class="icon-btn edit" onclick="editRecord('booking',${b.id})" title="Edit" aria-label="Edit booking"><i class="ti ti-edit"></i></button>
          <button class="icon-btn del" onclick="askDelete('booking',${b.id},'${b.client}')" title="Delete" aria-label="Delete booking"><i class="ti ti-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('') : `<tr><td colspan="6" style="text-align:center;padding:32px;color:var(--muted)">No bookings found</td></tr>`;
}

function filterBookings() { renderBookingsTable(); }

// ===========================
// INVENTORY
// ===========================
function renderInventory() {
  const cats = ['All', ...new Set(inventory.map(i => i.category))];
  document.getElementById('catFilters').innerHTML = cats.map(c =>
    `<div class="cat-chip ${c === invCatFilter ? 'active' : ''}" onclick="setCatFilter('${c}')">${c}</div>`
  ).join('');

  const data = inventory.filter(i => {
    const matchCat = invCatFilter === 'All' || i.category === invCatFilter;
    const matchSearch = !searchTerm || i.name.toLowerCase().includes(searchTerm) || i.sku.toLowerCase().includes(searchTerm);
    return matchCat && matchSearch;
  });

  document.getElementById('invGrid').innerHTML = data.length ? data.map(i => {
    const pct = Math.round((i.qty / i.maxQty) * 100);
    const barColor = pct > 60 ? 'var(--green)' : pct > 30 ? 'var(--amber)' : 'var(--red)';
    const icon = CAT_ICONS[i.category] || 'ti-box';
    return `
      <div class="inv-card" ondblclick="editRecord('inventory',${i.id})">
        <div class="inv-icon" style="background:${CAT_COLORS[i.category] || 'var(--bg3)'}">
          <i class="ti ${icon}" style="color:${CAT_TEXT[i.category] || 'var(--dim)'}"></i>
        </div>
        <div class="inv-name">${i.name}</div>
        <div class="inv-cat">${i.category} · ${i.sku}</div>
        <div class="inv-row">
          <span class="inv-qty">${i.qty} / ${i.maxQty}</span>
          <span class="inv-price">$${i.price}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${pct}%;background:${barColor}"></div>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:6px;margin-top:10px">
          <button class="icon-btn edit" onclick="editRecord('inventory',${i.id})" aria-label="Edit item"><i class="ti ti-edit"></i></button>
          <button class="icon-btn del" onclick="askDelete('inventory',${i.id},'${i.name}')" aria-label="Delete item"><i class="ti ti-trash"></i></button>
        </div>
      </div>`;
  }).join('') : `<div style="padding:40px;color:var(--muted);text-align:center;grid-column:1/-1">No items found</div>`;
}

function setCatFilter(cat) { invCatFilter = cat; renderInventory(); }

// ===========================
// CLIENTS
// ===========================
function renderClients() {
  const data = clients.filter(c =>
    !searchTerm || c.name.toLowerCase().includes(searchTerm) || c.email.toLowerCase().includes(searchTerm)
  );

  document.getElementById('clients-tbody').innerHTML = data.length ? data.map(c => {
    const bCount = bookings.filter(b => b.client === c.name).length;
    const initials = c.name.split(' ').map(n => n[0]).join('');
    return `
      <tr>
        <td>
          <div style="display:flex;align-items:center;gap:10px">
            <div class="avatar" style="width:28px;height:28px;font-size:10px">${initials}</div>
            <span class="cell-name">${c.name}</span>
          </div>
        </td>
        <td style="color:var(--dim);font-size:13px">${c.email}</td>
        <td class="cell-mono">${c.phone}</td>
        <td><span class="badge badge-blue">${bCount} booking${bCount !== 1 ? 's' : ''}</span></td>
        <td>
          <div class="row-actions">
            <button class="icon-btn edit" onclick="editRecord('client',${c.id})" aria-label="Edit client"><i class="ti ti-edit"></i></button>
            <button class="icon-btn del" onclick="askDelete('client',${c.id},'${c.name}')" aria-label="Delete client"><i class="ti ti-trash"></i></button>
          </div>
        </td>
      </tr>`;
  }).join('') : `<tr><td colspan="5" style="text-align:center;padding:32px;color:var(--muted)">No clients found</td></tr>`;
}

// ===========================
// SEARCH
// ===========================
function handleSearch() {
  searchTerm = document.getElementById('globalSearch').value.toLowerCase();
  renderView(currentView);
}

// ===========================
// CALENDAR
// ===========================
function renderCalendar() {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  document.getElementById('calDayNames').innerHTML = dayNames.map(d => `<div class="cal-day-name">${d}</div>`).join('');
  document.getElementById('calMonthLabel').textContent = `${MONTH_NAMES[calMonth]} ${calYear}`;

  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const prevDays = new Date(calYear, calMonth, 0).getDate();
  const todayStr = now.toISOString().split('T')[0];

  let html = '';

  for (let i = 0; i < firstDay; i++) {
    html += `<div class="cal-day other-month"><div class="day-num">${prevDays - firstDay + i + 1}</div></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const isToday = dateStr === todayStr;
    const isSel = dateStr === selectedDate;
    const dayBks = bookings.filter(b => b.date === dateStr);
    const dots = dayBks.map(b =>
      `<div class="day-dot ${b.status === 'Confirmed' ? 'green' : b.status === 'Cancelled' ? '' : 'amber'}"></div>`
    ).join('');

    html += `
      <div class="cal-day${isToday ? ' today' : ''}${isSel ? ' selected' : ''}" onclick="selectDate('${dateStr}')">
        <div class="day-num">${d}</div>
        ${dots ? `<div class="day-dots">${dots}</div>` : ''}
      </div>`;
  }

  const remaining = 42 - firstDay - daysInMonth;
  for (let i = 1; i <= remaining; i++) {
    html += `<div class="cal-day other-month"><div class="day-num">${i}</div></div>`;
  }

  document.getElementById('calDays').innerHTML = html;
  renderDayPanel();
}

function selectDate(d) { selectedDate = d; renderCalendar(); }

function changeMonth(dir) {
  calMonth += dir;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  else if (calMonth < 0) { calMonth = 11; calYear--; }
  renderCalendar();
}

function renderDayPanel() {
  const d = new Date(selectedDate + 'T12:00:00');
  document.getElementById('dayPanelTitle').textContent = d.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const dayBks = bookings.filter(b => b.date === selectedDate).sort((a, b) => a.time.localeCompare(b.time));
  document.getElementById('dayAppts').innerHTML = dayBks.length ? dayBks.map(b => `
    <div class="appt-item">
      <div class="appt-time">${b.time}</div>
      <div style="flex:1">
        <div class="appt-name">${b.client}</div>
        <div class="appt-detail">${b.service}</div>
      </div>
      <span class="badge ${STATUS_CLASS[b.status] || 'badge-blue'}" style="font-size:10px">${b.status}</span>
    </div>`).join('') :
    `<div class="appt-empty"><i class="ti ti-calendar-off" style="font-size:24px;display:block;margin-bottom:8px;opacity:0.4"></i>No appointments</div>`;
}

// ===========================
// MODAL — ADD / EDIT
// ===========================
function openAddModal() {
  editingId = null;
  const typeMap = { bookings: 'booking', inventory: 'inventory', clients: 'client' };
  const type = typeMap[currentView];
  if (!type) return;
  currentModal = type;
  document.getElementById('modalTitle').textContent = { booking: 'Add Booking', inventory: 'Add Item', client: 'Add Client' }[type];
  document.getElementById('modalBody').innerHTML = getForm(type, null);
  document.getElementById('modalOverlay').classList.add('open');
}

function editRecord(type, id) {
  currentModal = type;
  editingId = id;
  const list = type === 'booking' ? bookings : type === 'inventory' ? inventory : clients;
  const rec = list.find(r => r.id === id);
  document.getElementById('modalTitle').textContent = { booking: 'Edit Booking', inventory: 'Edit Item', client: 'Edit Client' }[type];
  document.getElementById('modalBody').innerHTML = getForm(type, rec);
  document.getElementById('modalOverlay').classList.add('open');
}

function getForm(type, rec) {
  if (type === 'booking') return `
    <div class="form-grid">
      <div class="form-group span2">
        <div class="form-label">Client Name</div>
        <input id="f-client" value="${rec ? rec.client : ''}" placeholder="Full name" />
      </div>
      <div class="form-group">
        <div class="form-label">Service</div>
        <select id="f-service">${SERVICES.map(s => `<option${rec && rec.service === s ? ' selected' : ''}>${s}</option>`).join('')}</select>
      </div>
      <div class="form-group">
        <div class="form-label">Status</div>
        <select id="f-status">${STATUSES.map(s => `<option${rec && rec.status === s ? ' selected' : ''}>${s}</option>`).join('')}</select>
      </div>
      <div class="form-group">
        <div class="form-label">Date</div>
        <input type="date" id="f-date" value="${rec ? rec.date : ''}" />
      </div>
      <div class="form-group">
        <div class="form-label">Time</div>
        <input type="time" id="f-time" value="${rec ? rec.time : ''}" />
      </div>
      <div class="form-group span2">
        <div class="form-label">Notes</div>
        <textarea id="f-notes" rows="3" placeholder="Optional notes...">${rec ? rec.notes : ''}</textarea>
      </div>
    </div>`;

  if (type === 'inventory') return `
    <div class="form-grid">
      <div class="form-group span2">
        <div class="form-label">Item Name</div>
        <input id="f-name" value="${rec ? rec.name : ''}" placeholder="Product name" />
      </div>
      <div class="form-group">
        <div class="form-label">Category</div>
        <select id="f-cat">${['Equipment','Supplies','Products','Software'].map(c => `<option${rec && rec.category === c ? ' selected' : ''}>${c}</option>`).join('')}</select>
      </div>
      <div class="form-group">
        <div class="form-label">SKU</div>
        <input id="f-sku" value="${rec ? rec.sku : ''}" placeholder="e.g. EQ-001" />
      </div>
      <div class="form-group">
        <div class="form-label">Quantity</div>
        <input type="number" id="f-qty" value="${rec ? rec.qty : ''}" min="0" />
      </div>
      <div class="form-group">
        <div class="form-label">Max Capacity</div>
        <input type="number" id="f-max" value="${rec ? rec.maxQty : ''}" min="1" />
      </div>
      <div class="form-group span2">
        <div class="form-label">Unit Price ($)</div>
        <input type="number" id="f-price" value="${rec ? rec.price : ''}" min="0" step="0.01" />
      </div>
    </div>`;

  if (type === 'client') return `
    <div class="form-grid full">
      <div class="form-group">
        <div class="form-label">Full Name</div>
        <input id="f-name" value="${rec ? rec.name : ''}" placeholder="Full name" />
      </div>
      <div class="form-group">
        <div class="form-label">Email</div>
        <input type="email" id="f-email" value="${rec ? rec.email : ''}" placeholder="email@example.com" />
      </div>
      <div class="form-group">
        <div class="form-label">Phone</div>
        <input id="f-phone" value="${rec ? rec.phone : ''}" placeholder="(555) 000-0000" />
      </div>
    </div>`;
}

function saveRecord() {
  const type = currentModal;

  if (type === 'booking') {
    const rec = {
      id: editingId || nextId.bookings++,
      client: document.getElementById('f-client').value.trim(),
      service: document.getElementById('f-service').value,
      status: document.getElementById('f-status').value,
      date: document.getElementById('f-date').value,
      time: document.getElementById('f-time').value,
      notes: document.getElementById('f-notes').value.trim(),
    };
    if (!rec.client || !rec.date) { showToast('Please fill in required fields'); return; }
    if (editingId) { const i = bookings.findIndex(b => b.id === editingId); bookings[i] = rec; }
    else bookings.push(rec);

  } else if (type === 'inventory') {
    const rec = {
      id: editingId || nextId.inventory++,
      name: document.getElementById('f-name').value.trim(),
      category: document.getElementById('f-cat').value,
      sku: document.getElementById('f-sku').value.trim(),
      qty: parseInt(document.getElementById('f-qty').value) || 0,
      maxQty: parseInt(document.getElementById('f-max').value) || 1,
      price: parseFloat(document.getElementById('f-price').value) || 0,
    };
    if (!rec.name) { showToast('Please fill in required fields'); return; }
    if (editingId) { const i = inventory.findIndex(b => b.id === editingId); inventory[i] = rec; }
    else inventory.push(rec);

  } else if (type === 'client') {
    const rec = {
      id: editingId || nextId.clients++,
      name: document.getElementById('f-name').value.trim(),
      email: document.getElementById('f-email').value.trim(),
      phone: document.getElementById('f-phone').value.trim(),
    };
    if (!rec.name) { showToast('Please fill in required fields'); return; }
    if (editingId) { const i = clients.findIndex(b => b.id === editingId); clients[i] = rec; }
    else clients.push(rec);
  }

  closeModal();
  renderView(currentView);
  renderDashboard();
  if (currentView === 'bookings') renderCalendar();
  showToast(editingId ? 'Record updated' : 'Record added');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  editingId = null;
}

// ===========================
// DELETE
// ===========================
function askDelete(type, id, name) {
  deleteTarget = { type, id };
  document.getElementById('confirmMsg').textContent = `Delete "${name}"? This action cannot be undone.`;
  document.getElementById('confirmOverlay').classList.add('open');
}

function confirmDelete() {
  const { type, id } = deleteTarget;
  if (type === 'booking') bookings = bookings.filter(b => b.id !== id);
  else if (type === 'inventory') inventory = inventory.filter(i => i.id !== id);
  else if (type === 'client') clients = clients.filter(c => c.id !== id);
  closeConfirm();
  renderView(currentView);
  renderDashboard();
  if (currentView === 'bookings') renderCalendar();
  showToast('Record deleted');
}

function closeConfirm() {
  document.getElementById('confirmOverlay').classList.remove('open');
  deleteTarget = null;
}

// ===========================
// TOAST
// ===========================
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ===========================
// INIT
// ===========================
renderDashboard();
renderCalendar();
