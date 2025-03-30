import { IonContent, IonPage, IonButton, IonInput, IonIcon } from '@ionic/react';
import { useState, useRef, useEffect } from 'react';
import { mailOutline } from 'ionicons/icons';

const OTP: React.FC = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<HTMLIonInputElement[]>([]);

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.setFocus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Handle backspace to move to previous input
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.setFocus();
    }
  };

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
            <div className="flex flex-col items-center">
              {/* Email Icon */}
              <div className="w-12 h-12 bg-maroon-100 rounded-full flex items-center justify-center mb-4">
                <IonIcon icon={mailOutline} className="text-maroon-600 text-2xl" />
              </div>

              {/* Headers */}
              <h2 className="text-xl font-bold mb-2">Verify Your Email</h2>
              <p className="text-gray-500 text-sm text-center mb-6">
                Please enter the verification code sent to your email
              </p>

              {/* OTP Input Fields */}
              <div className="flex gap-2 mb-6">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <IonInput
                    key={index}
                    ref={(el) => {
                      if (el) inputRefs.current[index] = el;
                    }}
                    id={`otp-${index}`}
                    type="text"
                    maxlength={1}
                    value={otp[index]}
                    onIonChange={e => handleOtpChange(index, e.detail.value || '')}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-lg font-semibold border-2 rounded-lg focus:border-maroon-500"
                  />
                ))}
              </div>

              {/* Confirm Button */}
              <IonButton 
                expand="block"
                className="w-full mb-4"
                color="maroon"
              >
                Confirm
              </IonButton>

              {/* Resend Section */}
              <div className="flex items-center justify-center gap-1 text-sm">
                <span className="text-gray-500">Did not receive code?</span>
                <button className="text-maroon-600 font-bold">
                  Resend Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default OTP;