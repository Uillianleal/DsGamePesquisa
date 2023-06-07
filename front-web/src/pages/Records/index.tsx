import { useCallback, useEffect, useState } from 'react';
import './styles.css';
import axios, { AxiosRequestConfig } from 'axios';
import { formatDate } from '../../util/helpers';
import Pagination from '../../components/Pagination';
import { Records } from '../../Types/records';
import { SpringPage } from '../../Types/vendor/spring';
import { BASE_URL } from '../../util/request';
import { Link } from 'react-router-dom';

type ControlComponentData = {
  activePage: number;
};

function RecordsPage() {
  const [recordsResponse, setRecordsResponse] = useState<SpringPage<Records>>();
  const [controlComponentData, setControlComponentData] = useState<ControlComponentData>({
    activePage: 0
  });

  const getRecords = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `${BASE_URL}/records?linesPerPage=12`,
      params: {
        page: controlComponentData.activePage,
        size: 4
      }
    };

    axios(config)
      .then((response) => setRecordsResponse(response.data))
      .catch((error) => {
        console.error('Error fetching records:', error);
      });
  }, [controlComponentData.activePage]);

  useEffect(() => {
    getRecords();
  }, [getRecords]);

  const handlePageChange = (pageNumber: number) => {
    setControlComponentData({
      activePage: pageNumber
    });
    // Chama a função getRecords para buscar os registros da nova página
    getRecords();
  };

  return (
    <div className="page-container">
      <div className="filters-container records-actions">
        <Link to="/charts">
          <button className="action-filters">VER GRÁFICOS</button>
        </Link>
      </div>
      <table className="records-table" cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>INSTANTE</th>
            <th>NOME</th>
            <th>IDADE</th>
            <th>PLATAFORMA</th>
            <th>GÊNERO</th>
            <th>TÍTULO DO GAME</th>
          </tr>
        </thead>
        <tbody>
          {recordsResponse?.content.map((record) => (
            <tr key={record.id}>
              <td>{formatDate(record.moment)}</td>
              <td>{record.name}</td>
              <td>{record.age}</td>
              <td className="text-secondary">{record.gamePlatform}</td>
              <td>{record.genreName}</td>
              <td className="text-primary">{record.gameTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        forcePage={controlComponentData.activePage}
        pageCount={recordsResponse?.totalPages ?? 0}
        range={2}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default RecordsPage;
