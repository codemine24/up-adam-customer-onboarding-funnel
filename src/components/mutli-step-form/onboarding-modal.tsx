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
                    <div className="mt-5 text-center space-y-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="80" height="80" className="mx-auto" viewBox="0 0 20 20"><path fill="#ffff" d="M10 20a10 10 0 0 1 0-20a10 10 0 1 1 0 20m-2-5l9-8.5L15.5 5L8 12L4.5 8.5L3 10z" /></svg>
                        <h1 className="text-2xl font-bold">Congratulations</h1>
                        <h1>You have successfully completed the onboarding process</h1>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default OnboardingModal