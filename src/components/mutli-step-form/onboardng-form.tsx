"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import OnboardingModal from "./onboarding-modal";
import { div } from "motion/react-client";

// Define the type for the form data
interface FormData {
  name: string;
  email: string;
  howHeard?: string;
  interests: string[];
  goal?: string;
}

const MultiStepForm = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [showErrors, setShowErrors] = useState(false);
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    mode: "onSubmit",
    shouldFocusError: false,
  });

  const nextStep = async () => {
    setShowErrors(true);

    let isValid = false;

    switch (step) {
      case 1:
        isValid = await trigger(["name", "email"]);
        break;
      case 2:
        isValid = await trigger(["howHeard"]);
        break;
      case 3:
        isValid = true;
        break;
      case 4:
        isValid = await trigger(["goal"]);
        break;
      default:
        isValid = false;
    }

    if (isValid) {
      setShowErrors(false);
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setShowErrors(false);
    setStep(step - 1);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setOpen(true);
  };

  const shouldShowError = (fieldName: keyof FormData) => {
    return showErrors && errors[fieldName];
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      <div className="min-w-lg mx-auto p-6 bg-neutral-900 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="step-container">
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-2xl mb-4">Let&apos;s Get to Know You</h2>
                <div>
                  <label htmlFor="name" className="block text-sm mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", {
                      required: "Name is required",
                      validate: (value) =>
                        value?.trim() !== "" || "Name is required",
                    })}
                    className="w-full p-2 rounded-md bg-neutral-700 text-white border border-neutral-600 focus:outline-none"
                  />
                  {shouldShowError("name") && (
                    <p className="text-red-500 text-sm">
                      {errors.name?.message}
                    </p>
                  )}
                </div>
                <div className="mt-4">
                  <label htmlFor="email" className="block text-sm mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                      validate: (value) =>
                        value?.trim() !== "" || "Email is required",
                    })}
                    className="w-full p-2 rounded-md bg-neutral-700 text-white border border-neutral-600 focus:outline-none"
                  />
                  {shouldShowError("email") && (
                    <p className="text-red-500 text-sm">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 2: How did you hear about us? */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-2xl mb-4">How did you hear about us?</h2>
                <div>
                  <input
                    type="text"
                    id="howHeard"
                    {...register("howHeard", {
                      required: "This field is required",
                      validate: (value) =>
                        value?.trim() !== "" || "This field is required",
                    })}
                    className="w-full p-2 rounded-md bg-neutral-700 text-white border border-neutral-600 focus:outline-none"
                  />
                  {shouldShowError("howHeard") && (
                    <p className="text-red-500 text-sm">
                      {errors.howHeard?.message}
                    </p>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 3: Interests (Optional) */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-2xl mb-4">
                  What are you most interested in?
                </h2>
                <Controller
                  name="interests"
                  control={control}
                  render={({ field }) => (
                    <div className="space-y-2">
                      <div>
                        <input
                          type="checkbox"
                          checked={
                            field.value?.includes("Product Updates") || false
                          }
                          onChange={(e) => {
                            const newValue = field.value || [];
                            if (e.target.checked) {
                              field.onChange([...newValue, "Product Updates"]);
                            } else {
                              field.onChange(
                                newValue.filter(
                                  (item: string) => item !== "Product Updates"
                                )
                              );
                            }
                          }}
                          className="mr-2"
                        />
                        <label>Product Updates</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          checked={field.value?.includes("Tutorials") || false}
                          onChange={(e) => {
                            const newValue = field.value || [];
                            if (e.target.checked) {
                              field.onChange([...newValue, "Tutorials"]);
                            } else {
                              field.onChange(
                                newValue.filter(
                                  (item: string) => item !== "Tutorials"
                                )
                              );
                            }
                          }}
                          className="mr-2"
                        />
                        <label>Tutorials / Guides</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          checked={field.value?.includes("Webinars") || false}
                          onChange={(e) => {
                            const newValue = field.value || [];
                            if (e.target.checked) {
                              field.onChange([...newValue, "Webinars"]);
                            } else {
                              field.onChange(
                                newValue.filter(
                                  (item: string) => item !== "Webinars"
                                )
                              );
                            }
                          }}
                          className="mr-2"
                        />
                        <label>Webinars / Events</label>
                      </div>
                    </div>
                  )}
                />
                {shouldShowError("interests") && (
                  <p className="text-red-500 text-sm">
                    {errors.interests?.message}
                  </p>
                )}
              </motion.div>
            )}

            {/* Step 4: Goal */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-2xl mb-4">
                  What&apos;s your goal with our product?
                </h2>
                <div>
                  <input
                    type="text"
                    id="goal"
                    {...register("goal", {
                      required: "This field is required",
                      validate: (value) =>
                        value?.trim() !== "" || "This field is required",
                    })}
                    className="w-full p-2 rounded-md bg-neutral-700 text-white border border-neutral-600 focus:outline-none"
                  />
                  {shouldShowError("goal") && (
                    <p className="text-red-500 text-sm">
                      {errors.goal?.message}
                    </p>
                  )}
                </div>
              </motion.div>
            )}

            <div
              className={`mt-6 flex ${
                step === 1 ? "justify-end" : "justify-between"
              }`}
            >
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-sm text-neutral-500 hover:underline cursor-pointer"
                >
                  Back
                </button>
              )}
              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-4 py-2 bg-white rounded-md text-black cursor-pointer"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={() => setShowErrors(true)}
                  className="px-4 py-2 bg-white rounded-md text-black cursor-pointer"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
        <OnboardingModal open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default MultiStepForm;
