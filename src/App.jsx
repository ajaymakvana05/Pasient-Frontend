import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainSection from "./Components/MainSection";
import RegistrationForm from "./Components/RegistrationForm";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import GetOTP from "./Components/GetOTP";
import AdminRegistration from "./pages/admin/adminRegistration";
import ProfileDashboard from "./pages/admin/ProfileDashboard";
import Profile from "./Components/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChangePassword from "./Components/ChangePassword";
import EditProfileForm from "./Components/EditProfileForm";
import TermsAndConditions from "./Components/TermsAndConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import DoctorDashboard from "./pages/admin/DoctorDashboard";
import PatientDashboard from "./pages/admin/PatientDashboard";
import BillingDashboard from "./pages/admin/BillingDashboard";
import ReportingDashboard from "./pages/admin/ReportingDashboard";
import { UserProvider } from "./context/UserContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import Dashboard from "./pages/admin/Dashboard";
import MonitorBilling from "./pages/admin/MonitorBilling";
import InsuranceClaims from "./pages/admin/InsuranceClaims";
import PaymentProcess from "./pages/admin/PaymentProcess";
import CreateBills from "./Components/Invoice";
import DoctorTable from "./Components/DoctorTable";
import Invoice from "./Components/Invoice";
import CreateBillForm from "./Components/CreateBillForm";
import AddDoctorForm from "./Components/AddDoctorForm";
import ChangeInvoiceForm from "./Components/ChangeInvoiceForm";
import InvoiceComponent from "./Components/InvoiceComponent";
import EditBillsform from "./Components/EditBillsform";
import DoctorLogin from "./Components/DoctorPanel/DoctorLogin";
import DoctorForgetPassword from "./Components/DoctorPanel/DoctorForgetPassword";
import DoctorOtp from "./Components/DoctorPanel/DoctorOtp";
import DoctorResetPassword from "./Components/DoctorPanel/DoctorResetPassword";
import DoctorHeader from "./Components/DoctorPanel/DoctorHeader";
import AppointmentManagement from "./pages/doctor/AppointmentManagement";
import DoctorProfileDashboard from "./pages/doctor/DoctorProfileDashboard";
import DoctorProfile from "./Components/DoctorPanel/DoctorProfile";
import DoctorChangePassword from "./Components/DoctorPanel/DoctorChangePassword";
import DoctorTermsAndConditions from "./Components/DoctorPanel/DoctorTermsAndConditions";
import DoctorPrivacyPolicy from "./Components/DoctorPanel/DoctorPrivacyPolicy";
import AppointmentTimeSlot from "./Components/DoctorPanel/AppointmentTimeSlot";
import AppointmentTable from "./Components/DoctorPanel/AppointmentTable";
import PatientRecordAccess from "./pages/doctor/PatientRecordAccess";
import DoctorPatientRecordAccessTable from "./Components/DoctorPanel/DoctorPatientRecordAccessTable";
import DoctorPatientDetails from "./Components/DoctorPanel/DoctorPatientDetails";
import PrescriptionTools from "./pages/doctor/PrescriptionTools";
import Appointments from "./Components/DoctorPanel/Appointments";
import UodateDoctorForm from "./Components/updateDoctorForm";
import PatientDetails from "./Components/DoctorPanel/PatientDetails";
import CreatePrescription from "./Components/DoctorPanel/CreatePrescription";
import MangePatientTable from "./MangePatientTable";
import TeleconsultationModule from "./pages/doctor/TeleconsultationModule";
import TeleconsultationAppointment from "./Components/DoctorPanel/TeleconsultationAppointment";
import AppointmentPopup from "./Components/DoctorPanel/AppointmentPopup";
import ChatDashboard from "./pages/doctor/ChatDashboard";
import ChatComponent from "./Components/DoctorPanel/ChatComponent";
import DoctorProtect from "./Components/DoctorPanel/DoctorProtected";
import PatientRegister from "./Components/PatientPanel/PatientRegister";
import PatientLogin from "./Components/PatientPanel/PatientLogin";
import PatientProtect from "./Components/PatientPanel/PatientProtect";
import PatientForgetPassword from "./Components/PatientPanel/PatientForgetPassword";
import PatientOtp from "./Components/PatientPanel/PatientOtp";
import PatientResetPassword from "./Components/PatientPanel/PatientResetPassword";
import PersonalHealthRecord from "./pages/patient/PersonalHealthRecord";
import PatientDetailDashboard from "./Components/PatientPanel/PatientDetailDashboard";
import PatientProfileDashboard from "./pages/patient/PatientProfileDashboard.jsx";
import DoctorProfileSidebar from "./Components/DoctorPanel/DoctorProfileSidebar.jsx";
import PatientProfileSidebar from "./Components/PatientPanel/PatientProfileSidebar.jsx";
import PatientProfile from "./Components/PatientPanel/PatientProfile.jsx";
import PatientPrescriptions from "./Components/PatientPanel/PatientPrescriptions.jsx";
import PatientsTestReports from "./Components/PatientPanel/PatientsTestReports.jsx";
import PatientMedicalHistory from "./Components/PatientPanel/PatientMedicalHistory.jsx";
import AppointmentBooking from "./pages/patient/AppointmentBooking.jsx";
import PatientMyAppointment from "./Components/PatientPanel/PatientMyAppointment.jsx";
import PatientAppointmentBooking from "./Components/PatientPanel/PatientAppointmentBooking.jsx";
import PatientAppointmentTimeSlot from "./Components/PatientPanel/PatientAppointmentTimeSlot.jsx";
import PatientAppointmentBookingInvoice from "./Components/PatientPanel/PatientAppointmentBookingInvoice.jsx";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="main-layout">
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            pauseOnHover
            draggable
          />
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetpassword" element={<ForgotPassword />} />
            <Route path="/getotp" element={<GetOTP />} />
            <Route path="/adminregistration" element={<AdminRegistration />} />
            <Route path="/changepassword" element={<ChangePassword />} />

            {/* Secure Profile Dashboard */}
            <Route
              path="/profiledashboard"
              element={
                <ProtectedRoute>
                  <ProfileDashboard />
                </ProtectedRoute>
              }
            >
              <Route
                index
                path="profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="changepassword"
                element={
                  <ProtectedRoute>
                    <ChangePassword />
                  </ProtectedRoute>
                }
              />
              <Route
                path="editprofileform"
                element={
                  <ProtectedRoute>
                    <EditProfileForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="termsandconditions"
                element={
                  <ProtectedRoute>
                    <TermsAndConditions />
                  </ProtectedRoute>
                }
              />
              <Route
                path="privacypolicy"
                element={
                  <ProtectedRoute>
                    <PrivacyPolicy />
                  </ProtectedRoute>
                }
              />
            </Route>

            {/* Secure Dashboard Routes */}

            {/* /dashboard */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctordashboard"
              element={
                <ProtectedRoute>
                  <DoctorDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/patientdashboard"
              element={
                <ProtectedRoute>
                  <PatientDashboard />
                </ProtectedRoute>
              }
            />

            {/* billingdashboard */}
            <Route
              path="/billingdashboard"
              element={
                <ProtectedRoute>
                  <BillingDashboard />
                </ProtectedRoute>
              }
            >
              <Route index path="monitorbilling" element={<MonitorBilling />} />
              <Route path="insuranceclaims" element={<InsuranceClaims />} />
              <Route path="paymentprocess" element={<PaymentProcess />} />
              <Route path="changennvoiceform" element={<ChangeInvoiceForm />} />
              <Route path="invoice" element={<Invoice />} />
              <Route path="editbillsform" element={<EditBillsform />} />
              <Route path="invoicecomponent" element={<InvoiceComponent />} />
            </Route>

            <Route
              path="/reportingdashboard"
              element={
                <ProtectedRoute>
                  <ReportingDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/createbillForm"
              element={
                <ProtectedRoute>
                  <CreateBillForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/UodateDoctorForm/:id"
              element={
                <ProtectedRoute>
                  <UodateDoctorForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/adddoctorform"
              element={
                <ProtectedRoute>
                  <AddDoctorForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctortable"
              element={
                <ProtectedRoute>
                  <DoctorTable />
                </ProtectedRoute>
              }
            />

            {/* Doctor route */}
            <Route
              path="doctor/doctorlogin"
              element={
                // <DoctorProtect>
                <DoctorLogin />
                // </DoctorProtect>
              }
            />
            <Route
              path="/doctorforgetpassword"
              element={
                <DoctorProtect>
                  <DoctorForgetPassword />
                </DoctorProtect>
              }
            />
            <Route
              path="/doctorgetotp"
              element={
                <DoctorProtect>
                  <DoctorOtp />
                </DoctorProtect>
              }
            />
            <Route
              path="/doctorresetpassword"
              element={
                <DoctorProtect>
                  <DoctorResetPassword />
                </DoctorProtect>
              }
            />
            <Route
              path="/appointmentmanagement"
              element={
                <DoctorProtect>
                  <AppointmentManagement />
                </DoctorProtect>
              }
            >
              <Route
                index
                path="appointmenttable"
                element={
                  <DoctorProtect>
                    <AppointmentTable />
                  </DoctorProtect>
                }
              />
              <Route
                path="appointmenttimeslot"
                element={
                  <DoctorProtect>
                    <AppointmentTimeSlot />
                  </DoctorProtect>
                }
              />
            </Route>

            <Route
              path="/doctorprofiledashboard"
              element={
                <DoctorProtect>
                  <DoctorProfileDashboard />
                </DoctorProtect>
              }
            >
              <Route
                index
                path="doctorprofile"
                element={
                  <DoctorProtect>
                    <DoctorProfile />
                  </DoctorProtect>
                }
              />
              <Route
                path="doctorchangepassword"
                element={
                  <DoctorProtect>
                    <DoctorChangePassword />
                  </DoctorProtect>
                }
              />
              <Route
                path="editprofileform"
                element={
                  <DoctorProtect>
                    <EditProfileForm />
                  </DoctorProtect>
                }
              />
              <Route
                path="doctorTermsandconditions"
                element={
                  <DoctorProtect>
                    <DoctorTermsAndConditions />
                  </DoctorProtect>
                }
              />
              <Route
                path="doctorprivacypolicy"
                element={
                  <DoctorProtect>
                    <DoctorPrivacyPolicy />
                  </DoctorProtect>
                }
              />
            </Route>
            {/* patientrecordaccess */}
            <Route
              path="/patientrecordaccess"
              element={
                <DoctorProtect>
                  <PatientRecordAccess />
                </DoctorProtect>
              }
            >
              <Route
                index
                path="doctorpatientrecordaccessTable"
                element={
                  <DoctorProtect>
                    <DoctorPatientRecordAccessTable />
                  </DoctorProtect>
                }
              />
              <Route
                path="doctorpatientdetails"
                element={
                  <DoctorProtect>
                    <DoctorPatientDetails />
                  </DoctorProtect>
                }
              />
            </Route>

            {/* PrescriptionTools */}

            <Route
              path="/prescriptiontools"
              element={
                <DoctorProtect>
                  <PrescriptionTools />
                </DoctorProtect>
              }
            >
              <Route
                path="appointments"
                element={
                  <DoctorProtect>
                    <Appointments />
                  </DoctorProtect>
                }
              />
              <Route
                path="patientdetails"
                element={
                  <DoctorProtect>
                    <PatientDetails />
                  </DoctorProtect>
                }
              />
              <Route
                path="createprescription"
                element={
                  <DoctorProtect>
                    <CreatePrescription />
                  </DoctorProtect>
                }
              />
              <Route
                path="mangePatienttable"
                element={
                  <DoctorProtect>
                    <MangePatientTable />
                  </DoctorProtect>
                }
              />
            </Route>
            {/* TeleconsultationModule */}
            <Route
              path="/teleconsultationmodule"
              element={
                <DoctorProtect>
                  <TeleconsultationModule />
                </DoctorProtect>
              }
            >
              <Route
                path="teleconsultationappointment"
                element={
                  <DoctorProtect>
                    {" "}
                    <TeleconsultationAppointment />{" "}
                  </DoctorProtect>
                }
              />
              <Route
                index
                path="appointmentpopup"
                element={
                  <DoctorProtect>
                    {" "}
                    <AppointmentPopup />{" "}
                  </DoctorProtect>
                }
              />
            </Route>
            {/* ChatDashboard */}
            <Route
              path="/chatdashboard"
              element={
                <DoctorProtect>
                  <ChatDashboard />
                </DoctorProtect>
              }
            >
              <Route
                index
                path="chatcomponent"
                element={
                  <DoctorProtect>
                    <ChatComponent />
                  </DoctorProtect>
                }
              />
            </Route>

            {/****************** PatientRegister *******************/}

            <Route
              path="/patientregister"
              element={
                // <PatientProtect>
                <PatientRegister />
                // </PatientProtect>
              }
            />
            <Route
              path="/patientlogin"
              element={
                // <DoctorProtect>
                <PatientLogin />
                // </DoctorProtect>
              }
            />
            <Route
              path="/patientforgetpassword"
              element={
                <PatientProtect>
                  <PatientForgetPassword />
                </PatientProtect>
              }
            />
            <Route
              path="/patientotp"
              element={
                <PatientProtect>
                  <PatientOtp />
                </PatientProtect>
              }
            />
            <Route
              path="/patientresetpassword"
              element={
                <PatientProtect>
                  <PatientResetPassword />
                </PatientProtect>
              }
            />
            <Route
              path="/personalhealthrecord"
              element={
                <PatientProtect>
                  <PersonalHealthRecord />
                </PatientProtect>
              }
            >
              <Route
                index
                path="patientdetaildashboard"
                element={
                  <PatientProtect>
                    <PatientDetailDashboard />
                  </PatientProtect>
                }
              />
              <Route
                path="patientprescriptions"
                element={
                  <PatientProtect>
                    <PatientPrescriptions />
                  </PatientProtect>
                }
              />
              <Route
                path="patientstestreports"
                element={
                  <PatientProtect>
                    <PatientsTestReports />
                  </PatientProtect>
                }
              />
              <Route
                path="patientmedicalhistory"
                element={
                  <PatientProtect>
                    <PatientMedicalHistory />
                  </PatientProtect>
                }
              />
            </Route>

            <Route
              path="/patientprofiledashboard"
              element={
                <PatientProtect>
                  <PatientProfileDashboard />
                </PatientProtect>
              }
            >
              <Route
                index
                path="patientprofile"
                element={
                  <PatientProtect>
                    <PatientProfile />
                  </PatientProtect>
                }
              />
            </Route>

            <Route
              path="/appointmentbooking"
              element={
                <PatientProtect>
                  <AppointmentBooking />
                </PatientProtect>
              }
            >
              <Route
                index
                path="patientmyappointment"
                element={
                  <PatientProtect>
                    <PatientMyAppointment />
                  </PatientProtect>
                }
              />
              <Route
                path="patientappointmentbooking"
                element={
                  <PatientProtect>
                    <PatientAppointmentBooking />
                  </PatientProtect>
                }
              />
              <Route
                path="patientappointmenttimelot"
                element={
                  <PatientProtect>
                    <PatientAppointmentTimeSlot />
                  </PatientProtect>
                }
              />
              <Route
                path="patientaappointmentbookinginvoice"
                element={
                  <PatientProtect>
                    <PatientAppointmentBookingInvoice />
                  </PatientProtect>
                }
              />
            </Route>
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
