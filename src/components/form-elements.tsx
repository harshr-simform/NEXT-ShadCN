"use client";
import * as React from "react";
import { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker, DateRangePicker } from "@/components/ui/date-picker";
import { MultiSelect, Option } from "@/components/ui/multi-select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Sample data for MultiSelect
const frameworkOptions: Option[] = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Next.js", value: "nextjs" },
  { label: "Nuxt.js", value: "nuxtjs" },
  { label: "Remix", value: "remix" },
  { label: "SvelteKit", value: "sveltekit" },
];

export default function FormElements() {
  const [selectedFrameworks, setSelectedFrameworks] = React.useState<string[]>(
    []
  );
  const [singleDate, setSingleDate] = React.useState<Date>();
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>();
  const [selectedCountry, setSelectedCountry] = React.useState<string>("");
  const [accountType, setAccountType] = React.useState<string>("personal");
  const [notifications, setNotifications] = React.useState<boolean>(false);
  const [marketing, setMarketing] = React.useState<boolean>(false);
  const [newsletter, setNewsletter] = React.useState<boolean>(false);
  const [darkMode, setDarkMode] = React.useState<boolean>(false);
  const [autoSave, setAutoSave] = React.useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      selectedFrameworks,
      singleDate,
      dateRange,
      selectedCountry,
      accountType,
      notifications,
      marketing,
      newsletter,
      darkMode,
      autoSave,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Form Components</h1>
        <p className="text-muted-foreground">
          Comprehensive showcase of all ShadCN form components
        </p>
      </div>

      <div className="grid gap-6">
        {/* Basic Form Elements */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Form Elements</CardTitle>
            <CardDescription>
              Input, Textarea, Select, and other basic form components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="basic-email">Email</Label>
                <Input
                  id="basic-email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="basic-password">Password</Label>
                <Input
                  id="basic-password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="basic-textarea">Bio</Label>
              <Textarea
                id="basic-textarea"
                placeholder="Tell us about yourself"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label>Country</Label>
              <Select
                value={selectedCountry}
                onValueChange={setSelectedCountry}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="fr">France</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Selection Components */}
        <Card>
          <CardHeader>
            <CardTitle>Selection Components</CardTitle>
            <CardDescription>
              Checkboxes, Radio buttons, Switches, and Multi-select
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Label>Account Type</Label>
              <RadioGroup
                value={accountType}
                onValueChange={setAccountType}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="personal" id="personal" />
                  <Label htmlFor="personal">Personal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="business" id="business" />
                  <Label htmlFor="business">Business</Label>
                </div>
              </RadioGroup>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Preferences</Label>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="notifications"
                    checked={notifications}
                    onCheckedChange={(checked) =>
                      setNotifications(checked as boolean)
                    }
                  />
                  <Label htmlFor="notifications">Enable notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="marketing"
                    checked={marketing}
                    onCheckedChange={(checked) =>
                      setMarketing(checked as boolean)
                    }
                  />
                  <Label htmlFor="marketing">Marketing emails</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={newsletter}
                    onCheckedChange={(checked) =>
                      setNewsletter(checked as boolean)
                    }
                  />
                  <Label htmlFor="newsletter">Newsletter subscription</Label>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Settings</Label>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="dark-mode"
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                  />
                  <Label htmlFor="dark-mode">Dark mode</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="auto-save"
                    checked={autoSave}
                    onCheckedChange={setAutoSave}
                  />
                  <Label htmlFor="auto-save">Auto-save</Label>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Preferred Frameworks</Label>
              <MultiSelect
                options={frameworkOptions}
                onValueChange={setSelectedFrameworks}
                defaultValue={selectedFrameworks}
                placeholder="Select frameworks"
                maxCount={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Date Components */}
        <Card>
          <CardHeader>
            <CardTitle>Date Components</CardTitle>
            <CardDescription>
              Date picker and date range picker components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Date of Birth</Label>
                <DatePicker
                  date={singleDate}
                  onDateChange={setSingleDate}
                  placeholder="Select your birth date"
                />
              </div>
              <div className="space-y-2">
                <Label>Project Duration</Label>
                <DateRangePicker
                  dateRange={dateRange}
                  onDateRangeChange={setDateRange}
                  placeholder="Select date range"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sample Form */}
        <Card>
          <CardHeader>
            <CardTitle>Sample Form</CardTitle>
            <CardDescription>
              A complete form demonstrating all components working together
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="form-name">Full Name</Label>
                  <Input id="form-name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="form-email">Email</Label>
                  <Input
                    id="form-email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="form-password">Password</Label>
                <Input
                  id="form-password"
                  type="password"
                  placeholder="Enter password"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="form-bio">Bio</Label>
                <Textarea
                  id="form-bio"
                  placeholder="Tell us about yourself"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Country</Label>
                <Select
                  value={selectedCountry}
                  onValueChange={setSelectedCountry}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Account Type</Label>
                <RadioGroup value={accountType} onValueChange={setAccountType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="personal" id="form-personal" />
                    <Label htmlFor="form-personal">Personal Account</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business" id="form-business" />
                    <Label htmlFor="form-business">Business Account</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label>Preferred Frameworks</Label>
                <MultiSelect
                  options={frameworkOptions}
                  onValueChange={setSelectedFrameworks}
                  defaultValue={selectedFrameworks}
                  placeholder="Select frameworks"
                  maxCount={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Date of Birth</Label>
                <DatePicker
                  date={singleDate}
                  onDateChange={setSingleDate}
                  placeholder="Select your birth date"
                />
              </div>

              <div className="space-y-4">
                <Label>Email Preferences</Label>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <Label htmlFor="form-notifications" className="text-base">
                        Email Notifications
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receive emails about your account activity.
                      </p>
                    </div>
                    <Switch
                      id="form-notifications"
                      checked={notifications}
                      onCheckedChange={setNotifications}
                    />
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <Label htmlFor="form-marketing" className="text-base">
                        Marketing emails
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receive emails about new products, features, and more.
                      </p>
                    </div>
                    <Switch
                      id="form-marketing"
                      checked={marketing}
                      onCheckedChange={setMarketing}
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Create Account
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Component Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Individual Component Examples</CardTitle>
            <CardDescription>
              Examples of each component with different variants and states
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Input Examples */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Input Components</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Default Input</Label>
                  <Input placeholder="Default input" />
                </div>
                <div className="space-y-2">
                  <Label>Disabled Input</Label>
                  <Input placeholder="Disabled input" disabled />
                </div>
                <div className="space-y-2">
                  <Label>Email Input</Label>
                  <Input type="email" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label>Password Input</Label>
                  <Input type="password" placeholder="Password" />
                </div>
              </div>
            </div>

            <Separator />

            {/* Selection Examples */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Selection Components</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Checkboxes</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cb1" />
                        <Label htmlFor="cb1">Default checkbox</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cb2" checked />
                        <Label htmlFor="cb2">Checked checkbox</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cb3" disabled />
                        <Label htmlFor="cb3">Disabled checkbox</Label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Switches</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="sw1" />
                        <Label htmlFor="sw1">Default switch</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="sw2" checked />
                        <Label htmlFor="sw2">Checked switch</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="sw3" disabled />
                        <Label htmlFor="sw3">Disabled switch</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
