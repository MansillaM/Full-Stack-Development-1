const url = 'http://localhost:3000/agents';

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const { data } = await response.json();
    if (!Array.isArray(data)) {
      throw new Error('API response is not an array');
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

const createTable = (data) => {
  const table = document.createElement('table');

  // create table header
  const headerRow = table.insertRow();
  const headers = ['First Name', 'Last Name', 'Rating', 'Fee'];
  headers.forEach((header) => {
    const th = document.createElement('th');
    th.textContent = header;
    th.setAttribute('data-sort', header.toLowerCase().replace(' ', '_'));
    th.addEventListener('click', () => {
      const property = th.getAttribute('data-sort');
      sortDataByProperty(data, property);
    });
    headerRow.appendChild(th);
  });

  data.forEach((agent) => {
    const row = table.insertRow();
    const cells = [
      agent.first_name,
      agent.last_name,
      agent.rating,
      agent.fee.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
    ];
    cells.forEach((cellData, index) => {
      const cell = row.insertCell();
      if (index === 2) {
        if (cellData === 100) {
          cell.style.color = 'green';
        } else if (cellData >= 90) {
          cell.style.color = 'blue';
        } else {
          cell.style.color = 'purple';
        }
      }
      cell.textContent = cellData;
    });
  });

  return table;
};

let currentSort = {
  property: '',
  order: 'asc',
};

const sortDataByProperty = (data, property) => {
  // toggle sort order if sorting by the same property
  if (currentSort.property === property) {
    currentSort.order = currentSort.order === 'asc' ? 'desc' : 'asc';
  } else {
    currentSort.property = property;
    currentSort.order = 'asc';
  }

  const sortedData = [...data].sort((a, b) => {
    if (a[property] < b[property]) {
      return currentSort.order === 'asc' ? -1 : 1;
    }
    if (a[property] > b[property]) {
      return currentSort.order === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  const table = createTable(sortedData);
  tableContainer.appendChild(table);
};

const renderData = async () => {
  const data = await fetchData();
  const table = createTable(data);
  const container = document.getElementById('table-container');
  container.appendChild(table);
};

renderData();