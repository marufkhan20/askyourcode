"use client"

import { motion } from "framer-motion"

export function BrowserMockup() {
  return (
    <div className="rounded-lg border shadow-xl overflow-hidden">
      {/* Browser Header */}
      <div className="border-b bg-muted/50 p-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 ml-2">
            <div className="bg-background rounded-md flex items-center px-3 py-1.5">
              <span className="text-sm text-muted-foreground">https://codeqa.app/dashboard</span>
            </div>
          </div>
        </div>
      </div>

      {/* Browser Content */}
      <div className="bg-background p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            className="bg-muted/30 rounded-lg p-4 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-primary/20 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold">674.34k</div>
              <div className="text-sm text-muted-foreground">All Traffic</div>
            </div>
          </motion.div>

          <motion.div
            className="bg-muted/30 rounded-lg p-4 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-primary/20 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M16 12h-6.5a2 2 0 1 0 0 4H12"></path>
                <path d="M10 8h6.5a2 2 0 1 1 0 4H14"></path>
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold">$780.8</div>
              <div className="text-sm text-muted-foreground">Spent this month</div>
            </div>
          </motion.div>

          <motion.div
            className="bg-muted/30 rounded-lg p-4 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-primary/20 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold">$974.34</div>
              <div className="text-sm text-muted-foreground">Earnings</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <motion.div
            className="bg-muted/30 rounded-lg p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="font-medium">Credit Balance</div>
            </div>
            <div className="text-2xl font-bold">$233.00</div>
            <div className="mt-4 h-8 w-full bg-primary/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "35%" }}
                transition={{ delay: 0.6, duration: 1 }}
              ></motion.div>
            </div>
          </motion.div>

          <motion.div
            className="bg-muted/30 rounded-lg p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="font-medium">This Month Earnings</div>
              <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">+2.5%</div>
            </div>
            <div className="text-2xl font-bold">$800.25</div>
            <div className="mt-4 flex justify-between">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  className="w-8 bg-primary/20 rounded-full"
                  style={{ height: `${Math.random() * 40 + 20}px` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.random() * 40 + 20}px` }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                ></motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

