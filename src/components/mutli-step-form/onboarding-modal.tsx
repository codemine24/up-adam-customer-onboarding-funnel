"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

const OnboardingModal = ({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Congratulations</DialogTitle>
                    {/* <DialogDescription>
                        You have successfully completed the onboarding process.
                    </DialogDescription> */}

                    <div className="mt-5">
                        <h1>You have successfully completed the onboarding process</h1>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default OnboardingModal