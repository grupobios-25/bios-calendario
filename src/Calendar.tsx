import "./Calendar.css";
import { useWeeklyAppointments } from "./hooks";

const Calendar = () => {
  const { data, isLoading } = useWeeklyAppointments(new Date());

  if (isLoading) {
    return "Cargando...";
  }

  console.log({ data });

  return (
    <div className="Calendar__container">
      <div className="Calendar__main"></div>
      <button className="Calendar__previous_week_button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z"
          ></path>
        </svg>{" "}
        Semana anterior
      </button>
      <button className="Calendar__next_week_button">
        Semana siguiente{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Calendar;
