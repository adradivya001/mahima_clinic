import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, MapPin, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { primaryDoctor } from '@/content/doctor';
import { trackEvent } from '@/lib/analytics';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
}

export function AppointmentModal({ isOpen, onClose, initialTreatment = 'General Consultation' }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    timeSlot: 'Morning (9:30 AM - 1:00 PM)',
    location: 'Anantapur (Vidyuth Nagar Circle)',
    doctor: 'Dr. Pogula Nagendra Babu (Chief Consultant)',
    treatment: initialTreatment,
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    trackEvent('appointment_submit', {
      name: formData.name,
      treatment: formData.treatment,
      slot: formData.timeSlot,
    });

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-[#FCFBF8] border border-botanical-200 rounded-3xl shadow-2xl overflow-hidden z-10 my-8"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-botanical-800 to-botanical-700 text-white p-6 sm:p-8">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-herbal-500/20 border border-herbal-400/30 text-herbal-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Direct Doctor Consultation
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-white font-semibold">
                Book an Appointment
              </h2>
              <p className="text-sm text-botanical-100 mt-1">
                Consult with <span className="font-semibold text-herbal-300">{primaryDoctor.name}</span> (33+ Years Experience) · Vidyuth Nagar Circle
              </p>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-botanical-100 text-botanical-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10 text-botanical-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-botanical-900 mb-2">
                    Consultation Requested!
                  </h3>
                  <p className="text-charcoal-600 text-sm max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-charcoal-900">{formData.name}</strong>. Our clinic desk will call you at <strong className="text-charcoal-900">{formData.phone}</strong> to confirm your slot ({formData.timeSlot}).
                  </p>

                  <div className="bg-botanical-50 border border-botanical-200 rounded-2xl p-4 text-left max-w-md mx-auto text-xs space-y-2 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal-500">Selected Doctor:</span>
                      <span className="font-bold text-botanical-900">{formData.doctor}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal-500">Consultation Fee:</span>
                      <span className="font-bold text-botanical-800">₹100 (Pay at Clinic)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal-500">Clinic Location:</span>
                      <span className="font-semibold text-charcoal-900">{formData.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hello Sri Mahima Clinic, I have requested an appointment for ${formData.name} regarding ${formData.treatment}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-botanical-700 text-white font-semibold text-sm hover:bg-botanical-800 transition-colors inline-flex items-center justify-center gap-2"
                    >
                      Instant WhatsApp Confirmation
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 rounded-full border border-botanical-300 text-botanical-800 font-semibold text-sm hover:bg-botanical-50 transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                        Patient Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-botanical-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Kumar"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-botanical-200 bg-white text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-botanical-600 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-botanical-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-botanical-200 bg-white text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-botanical-600 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-botanical-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-botanical-200 bg-white text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-botanical-600 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                        Preferred Timing Slot
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-botanical-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          value={formData.timeSlot}
                          onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-botanical-200 bg-white text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-botanical-600 focus:border-transparent"
                        >
                          <option value="Morning (9:30 AM - 1:30 PM)">Morning: 9:30 AM – 1:30 PM</option>
                          <option value="Evening (4:30 PM - 8:30 PM)">Evening: 4:30 PM – 8:30 PM</option>
                          <option value="Check Availability on Call">Check Immediate Availability</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                        Clinic Location *
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-botanical-200 bg-white text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-botanical-600 focus:border-transparent"
                      >
                        <option value="Anantapur (Vidyuth Nagar Circle)">Anantapur (Vidyuth Nagar Circle)</option>
                        <option value="Bengaluru (Marathahalli)">Bengaluru (Marathahalli)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                        Select Doctor / Consultant
                      </label>
                      <select
                        value={formData.doctor}
                        onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-botanical-200 bg-white text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-botanical-600 focus:border-transparent"
                      >
                        <option value="Dr. P. Kumaraiah (M.D. – Sri Mahima Group)">Dr. P. Kumaraiah — B.H.M.S., M.D. (Acup.)</option>
                        <option value="Dr. Pogula Nagendra Babu (Chief Consultant)">Dr. Pogula Nagendra Babu — B.H.M.S., M.D., M.B.A.</option>
                        <option value="Dr. Premajyothi Fraser (Wellness Physician)">Dr. Premajyothi Fraser — B.H.M.S., M.D., F.H.P.C.</option>
                        <option value="Any Available Senior Consultant">Any Available Senior Consultant (₹100 OPD)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                      Area of Concern / Treatment Category
                    </label>
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-botanical-200 bg-white text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-botanical-600 focus:border-transparent"
                    >
                      <option value="Skin & Hair (Psoriasis, Eczema, Vitiligo)">Skin & Hair (Psoriasis, Eczema, Vitiligo, Hair Fall)</option>
                      <option value="Chronic Conditions (Gastric, Colitis, Respiratory)">Chronic Conditions (Gastric, Colitis, Venous Ulcer)</option>
                      <option value="Women’s Health (PCOS, Menstrual, Fertility)">Women’s Health (PCOS, Menstrual Health, Fertility)</option>
                      <option value="Pain & Lifestyle (Migraine, Joints, Sciatica)">Pain & Lifestyle (Migraine, Joint Care, Sciatica)</option>
                      <option value="Family & Child Care">Family & Child Care (Pediatric Wellness)</option>
                      <option value="Classical Homoeopathy & Acupuncture">Classical Homoeopathy & Acupuncture</option>
                      <option value="General Consultation">General Health Consultation (₹100)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                      Brief Health History or Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Duration of symptoms, previous treatments tried..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-botanical-200 bg-white text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-botanical-600 focus:border-transparent resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-botanical-50/80 border border-botanical-200/60 rounded-xl text-xs text-botanical-900">
                    <AlertCircle className="w-4 h-4 text-botanical-700 shrink-0" />
                    <span>Clinic consultation fee is only <strong>₹100</strong>. Pay comfortably at the clinic desk.</span>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-2xl bg-botanical-700 text-white font-semibold text-sm hover:bg-botanical-800 transition-all shadow-botanical flex items-center justify-center gap-2 disabled:opacity-75"
                    >
                      {loading ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4 text-herbal-400" />
                          <span>Confirm Consultation Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
