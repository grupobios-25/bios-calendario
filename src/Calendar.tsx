import "./Calendar.css";
import { useAppointments } from "./hooks";

const Calendar = () => {
  const { data, isLoading } = useAppointments({
    week: 2,
    year: 2025,
  });

  if (isLoading) {
    return "Cargando...";
  }

  return (
    <div className="Calendar__container">
      <div className="Calendar__days">
        <div className="Calendar__day">
          <div>Lunes</div>
        </div>
        <div className="Calendar__day">
          <div>Martes</div>
        </div>
        <div className="Calendar__day">
          <div>Miércoles</div>
        </div>
        <div className="Calendar__day">
          <div>Jueves</div>
        </div>
        <div className="Calendar__day">
          <div>Viernes</div>
        </div>
        <div className="Calendar__day">
          <div>Sábado</div>
        </div>
        <div className="Calendar__day">
          <div>Domingo</div>
        </div>
      </div>
      <button className="Calendar__previous_week_button">
        Semana anterior
      </button>
      <button className="Calendar__next_week_button">Semana siguiente</button>
    </div>
  );
};

export default Calendar;
