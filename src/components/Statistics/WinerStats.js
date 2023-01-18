import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import moment from "moment";
import axios from "axios";

const WinerStats = () => {
  const user = useSelector((state) => state.userReducer);
  const [sauls, setSauls] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/sauls/user_sauls`, {
        params: { userId: user._id },
      })
      .then((value) => {
        setSauls(value.data);
      });
  }, [user]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        // text: "Par gagneurs d'âme",
      },
    },
  };

  const labels = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const getMonth = (month) =>
    sauls.filter(
      (saul) =>
        moment(saul.createdAt).month() === month &&
        moment(saul.createdAt).year() === moment().year()
    ).length;

  const data = {
    labels,
    datasets: [
      {
        label: "Nbre d'âmes",
        data: [getMonth(0), getMonth(1), getMonth(3), 21, 5],
        backgroundColor: "rgb(40,166,202)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default WinerStats;
