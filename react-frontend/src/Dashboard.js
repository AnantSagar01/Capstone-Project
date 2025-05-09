import React, { useEffect, useState } from "react";
 
import axios from "axios";
 
import { Bar, Pie } from "react-chartjs-2";
 
import 'chart.js/auto';
 
//import { useNavigate } from "react-router-dom"; // <-- NEW
 
const Dashboard = () => {
 
  const [eda, setEda] = useState({});
 
  const [loading, setLoading] = useState(true);
 
  //const navigate = useNavigate(); // <-- NEW
 
  useEffect(() => {
 
    axios.get("http://localhost:5000/feedback/eda", {
 
      headers: {
 
        //Authorization: `Bearer ${localStorage.getItem("token")}`
 
      }
 
    }).then(res => {
 
      setEda(res.data);
 
      setLoading(false);
 
    });
 
  }, []);
 
  if (loading) return <p>Loading dashboard...</p>;
 
  const barData = {
 
    labels: Object.keys(eda.average_by_skin_type || {}),
 
    datasets: [{
 
      label: 'Average Rating',
 
      data: Object.values(eda.average_by_skin_type || {}),
 
      backgroundColor: 'rgba(255, 99, 132, 0.6)'
 
    }]
 
  };
 
  const pieData = {
 
    labels: Object.keys(eda.top_customers || {}),
 
    datasets: [{
 
      label: 'Top Customers',
 
      data: Object.values(eda.top_customers || {}),
 
      backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#a4de02', '#fcba03']
 
    }]
 
  };
 
  const keywordBarData = {
 
    labels: Object.keys(eda.keyword_counts || {}).slice(0, 5),
 
    datasets: [{
 
      label: 'Keyword Frequency',
 
      data: Object.values(eda.keyword_counts || {}).slice(0, 5),
 
      backgroundColor: 'rgba(153, 102, 255, 0.6)'
 
    }]
 
  };
 
  const downloadCSV = async () => {
 
    const res = await fetch("http://localhost:5000/feedback/download", {
 
      headers: {
 
        //Authorization: `Bearer ${localStorage.getItem("token")}`
 
      }
 
    });
 
    const blob = await res.blob();
 
    const url = window.URL.createObjectURL(blob);
 
    const link = document.createElement("a");
 
    link.href = url;
 
    link.download = "feedback_data.csv";
 
    link.click();
 
  };
 
  return (
<div className="container mt-4">
<h2>Feedback Analytics</h2>
<p><strong>Total Feedbacks:</strong> {eda.rows}</p>
<p><strong>Columns:</strong> {eda.columns}</p>
<p><strong>Average Rating:</strong> {eda.average_rating}</p>
<div className="row">
<div className="col-md-6 mb-4">
<div className="card p-3 shadow-sm">
<h4>Average Rating by Skin Type</h4>
<Bar data={barData} />
</div>
</div>
<div className="col-md-6 mb-4">
<div className="card p-3 shadow-sm">
<h4>Top Customers</h4>
<Pie data={pieData} />
</div>
</div>
</div>
<div className="col-md-12 mb-4">
<div className="card p-3 shadow-sm">
<h4>Top Keywords in Feedback</h4>
<Bar data={keywordBarData} />
</div>
</div>
<div className="card p-3 mt-4">
<button className="btn btn-primary" onClick={downloadCSV}>
   Download Feedback CSV
</button>
</div>
</div>
 
  );
 
};
 
export default Dashboard;