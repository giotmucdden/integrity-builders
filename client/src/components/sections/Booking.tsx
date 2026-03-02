import { useState } from "react";
import { Calendar, CheckCircle, Clock, Mail, Phone, User } from "lucide-react";
import { toast } from "sonner";
import { SERVICES } from "@/config/services";
import { MONTHS, DAYS, TIME_SLOTS } from "@/config/constants";

type BookingForm = {
  name: string;
  phone: string;
  email: string;
  service: string;
  notes: string;
};

const initialForm: BookingForm = {
  name: "",
  phone: "",
  email: "",
  service: "",
  notes: "",
};

export function Booking() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState<BookingForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const getDaysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDay = (month: number, year: number) => new Date(year, month, 1).getDay();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const isDisabled = (day: number) => {
    const d = new Date(currentYear, currentMonth, day);
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return d < t || d.getDay() === 0;
  };

  const formatDate = (day: number) => `${MONTHS[currentMonth]} ${day}, ${currentYear}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      toast.error("Please select a date and time for your consultation.");
      return;
    }
    if (!form.name || !form.phone) {
      toast.error("Please provide your name and phone number.");
      return;
    }
    setSubmitted(true);
    toast.success("Consultation request submitted! We'll call you to confirm.");
  };

  const resetForm = () => {
    setSubmitted(false);
    setSelectedDate(null);
    setSelectedTime(null);
    setForm(initialForm);
  };

  const updateForm = (field: keyof BookingForm, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDay(currentMonth, currentYear);

  if (submitted) {
    return (
      <section id="booking" className="py-20 bg-[#f4f4f4]">
        <div className="container">
          <div className="max-w-lg mx-auto text-center py-16">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-brand-green/15">
              <CheckCircle size={40} className="text-brand-green" />
            </div>
            <h3 className="text-3xl mb-3 font-display text-brand-black tracking-wide">
              Request Received!
            </h3>
            <p className="text-gray-600 mb-2 font-body">
              Thank you, <strong>{form.name}</strong>! We've received your consultation request for:
            </p>
            <p className="font-bold text-green-700 mb-2 font-body">
              {selectedDate} at {selectedTime}
            </p>
            <p className="text-gray-500 text-sm font-body">
              We'll call you at <strong>{form.phone}</strong> to confirm your appointment.
            </p>
            <button className="btn-green mt-8" onClick={resetForm}>
              Book Another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-[#f4f4f4]">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-normal font-display tracking-wide text-brand-black">
            Book a Free Consultation
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto font-body">
            Pick a date and time that works for you. Our team will call you back to confirm your
            appointment.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-sm shadow-lg p-6">
            <div className="flex items-center justify-between mb-5">
              <button
                type="button"
                onClick={prevMonth}
                className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors text-gray-600 font-bold text-lg"
              >
                ‹
              </button>
              <span className="font-bold text-gray-800 font-display tracking-widest text-[1.2rem]">
                {MONTHS[currentMonth]} {currentYear}
              </span>
              <button
                type="button"
                onClick={nextMonth}
                className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors text-gray-600 font-bold text-lg"
              >
                ›
              </button>
            </div>

            <div className="grid grid-cols-7 mb-2">
              {DAYS.map((d) => (
                <div
                  key={d}
                  className="text-center text-xs font-bold text-gray-400 py-1 uppercase tracking-wide font-body"
                >
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                const dateStr = formatDate(day);
                const disabled = isDisabled(day);
                const selected = selectedDate === dateStr;
                return (
                  <button
                    key={day}
                    type="button"
                    disabled={disabled}
                    onClick={() => setSelectedDate(dateStr)}
                    className={`aspect-square flex items-center justify-center rounded-sm text-sm font-semibold transition-all duration-150 font-body ${
                      selected
                        ? "bg-brand-green text-white"
                        : disabled
                          ? "text-gray-300 cursor-not-allowed"
                          : "text-gray-700 hover:bg-brand-green/10"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {selectedDate && (
              <div className="mt-5 pt-5 border-t border-gray-100">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2 font-body">
                  <Clock size={12} /> Available Times — {selectedDate}
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {TIME_SLOTS.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-1 text-xs font-semibold rounded-sm border transition-all duration-150 font-body ${
                        selectedTime === time
                          ? "bg-brand-green text-white border-brand-green"
                          : "bg-white text-gray-600 border-gray-200 hover:border-brand-green"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-sm shadow-lg p-6 flex flex-col gap-4">
            <h3 className="text-2xl text-gray-800 mb-1 font-display tracking-wide">Your Information</h3>

            {selectedDate && selectedTime && (
              <div className="flex items-center gap-2 p-3 rounded-sm text-sm font-semibold bg-brand-green/10 text-brand-green-dark font-body">
                <Calendar size={14} />
                {selectedDate} at {selectedTime}
              </div>
            )}

            <InputField
              label="Full Name *"
              icon={<User size={14} />}
              type="text"
              required
              placeholder="John Smith"
              value={form.name}
              onChange={(v) => updateForm("name", v)}
            />

            <InputField
              label="Phone Number *"
              icon={<Phone size={14} />}
              type="tel"
              required
              placeholder="(555) 000-0000"
              value={form.phone}
              onChange={(v) => updateForm("phone", v)}
            />

            <InputField
              label="Email Address"
              icon={<Mail size={14} />}
              type="email"
              placeholder="john@email.com"
              value={form.email}
              onChange={(v) => updateForm("email", v)}
            />

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1 font-body">
                Service Needed
              </label>
              <select
                value={form.service}
                onChange={(e) => updateForm("service", e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-green-500 transition-colors bg-white font-body"
              >
                <option value="">Select a service...</option>
                {SERVICES.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Other">Other / Not Sure</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1 font-body">
                Project Notes
              </label>
              <textarea
                rows={3}
                placeholder="Brief description of your project..."
                value={form.notes}
                onChange={(e) => updateForm("notes", e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-green-500 transition-colors resize-none font-body"
              />
            </div>

            <button type="submit" className="btn-green w-full mt-2 flex items-center justify-center gap-2">
              <Calendar size={16} />
              Request Consultation
            </button>

            <p className="text-xs text-gray-400 text-center font-body">
              We'll call you within 24 hours to confirm your appointment.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

type InputFieldProps = {
  label: string;
  icon: React.ReactNode;
  type: string;
  required?: boolean;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

function InputField({ label, icon, type, required, placeholder, value, onChange }: InputFieldProps) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1 font-body">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>
        <input
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-green-500 transition-colors font-body"
        />
      </div>
    </div>
  );
}
