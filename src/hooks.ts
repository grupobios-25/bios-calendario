import { useEffect, useState } from "react";

type AppointmentBlock = {
  available: boolean;
  patientName?: string;
};

export const useAppointments = ({
  week,
  year,
}: {
  week: number;
  year: number;
}): {
  data: {
    dayLabel: string;
    blocks: {
      "8:00 - 9:00": AppointmentBlock;
      "9:00 - 10:00": AppointmentBlock;
      "10:00 - 11:00": AppointmentBlock;
      "11:00 - 12:00": AppointmentBlock;
      "12:00 - 13:00": AppointmentBlock;
      "13:00 - 14:00": AppointmentBlock;
      "14:00 - 15:00": AppointmentBlock;
      "15:00 - 16:00": AppointmentBlock;
      "16:00 - 17:00": AppointmentBlock;
      "17:00 - 18:00": AppointmentBlock;
      "18:00 - 19:00": AppointmentBlock;
    };
  }[];
  isLoading: boolean;
} => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(
      () => setIsLoading(false),
      500 + Math.random() * 500
    );
    return () => clearTimeout(timeout);
  }, []);

  return {
    isLoading,
    data: [],
  };
};
