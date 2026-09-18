<p align="center">
  <a href="https://off-the-record.anatole.co/">
    <img src="https://raw.githubusercontent.com/hopeugetherpes/Off-The-Record/main/public/otr-icon.png" width="160" alt="Off The Record">
  </a>
</p>

<h1 align="center">OFF THE RECORD</h1>

<p align="center">
  <strong>Un-cloud your files. Put the network in the wall.</strong>
</p>

<p align="center">
  An anonymous, offline, peer-to-peer network of USB drives embedded in public space.<br />
  No account. No synchronization. No platform. Just files, hardware and whoever happens to walk past.
</p>

<p align="center">
  <a href="https://off-the-record.anatole.co/">
    <img src="https://img.shields.io/badge/ENTER_THE_NETWORK-off--the--record.anatole.co-9A6500?style=for-the-badge" alt="Off The Record website">
  </a>
  <a href="https://github.com/hopeugetherpes/Off-The-Record">
    <img src="https://img.shields.io/badge/SOURCE_CODE-GITHUB-181717?style=for-the-badge&logo=github&logoColor=white" alt="Source code">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/NETWORK-OFFLINE-111111?style=flat-square" alt="Offline network">
  <img src="https://img.shields.io/badge/MODEL-PEER_TO_PEER-444444?style=flat-square" alt="Peer to peer">
  <img src="https://img.shields.io/badge/ACCESS-NO_ACCOUNT-706e70?style=flat-square" alt="No account">
  <img src="https://img.shields.io/badge/SPACE-PUBLIC-9A6500?style=flat-square" alt="Public space">
  <img src="https://img.shields.io/badge/LICENSE-CC0_1.0-EFB974?style=flat-square" alt="CC0">
</p>

---

# The cloud ends here.

Most file sharing today happens through infrastructure you never see and do not control. You create an account, accept somebody else's terms, upload your data to somebody else's servers and trust that the service will still exist, still be accessible and still behave the way you expect tomorrow.

**Off The Record takes the opposite approach: put a USB drive in a wall.**

Each node is simply a writable USB storage device installed in a genuinely public place. Anyone who reaches it can browse what is there, leave something behind, replace files or create another drop somewhere else. There is no central server coordinating the network, no login system, no wireless protocol and no synchronization between nodes. One installation does not need to know that any of the others exist.

> **The drive is the network.**

The point is not to reproduce cloud storage with worse hardware. It is to make data physical again: to move file exchange out of invisible infrastructure and back into streets, buildings, objects and actual human geography.

**Un-cloud your files.**

---

# 💾 What is Off The Record?

Off The Record is a public-space file-sharing project built around independent USB installations known as **drops**.

A drop is intentionally simple:

```text
PERSON
   │
   ▼
[ USB DROP ]
   ▲
   │
PERSON
```

No intermediary is required for the actual exchange.

A person physically reaches the drive, connects to it and interacts with its contents as ordinary removable storage.

Every installation is autonomous.

A drop may survive for years.

It may disappear tomorrow.

Someone may add a photograph.

Someone else may delete it.

The drive may fill up, fail, be replaced, vandalized or quietly become part of its surroundings.

**Impermanence is not a bug. It is part of the network.**

---

# 🧱 The network has no cloud

Off The Record follows four basic principles:

### **PUBLIC**

A drop belongs somewhere people can genuinely access.

Not behind an account.

Not behind a membership.

Not behind an appointment.

Not behind a permanently locked door.

---

### **LOCAL**

The exchange happens directly at the physical object.

No account or special application is required to access a normal drop.

The USB drive itself is the interface.

---

### **SINGULAR**

Every node stands alone.

There is no requirement for synchronization, consensus or permanent connectivity between installations.

A single working USB drive is already a complete node.

---

### **READ / WRITE**

The network is participatory.

People do not merely download from it.

They may leave something behind.

That simple ability transforms storage into a shared public object.

---

# 🌐 The website

**https://off-the-record.anatole.co/** is the editorial and archival layer of the project.

The website provides:

* 🌍 an interactive map of documented drops;
* 💾 a searchable installation database;
* 📜 the project manifesto;
* 🛠️ a field guide for creating a drop;
* ❓ practical FAQ and compatibility information;
* ⚠️ USB security guidance;
* 📍 individual installation records;
* ✉️ a submission workflow for new drops;
* 📚 historical context about the original project.

The website is **not the file-sharing network itself**.

If the website disappears, an existing USB drop can continue functioning perfectly well.

That separation is intentional.

```text
        WEBSITE
           │
           │ documents
           ▼
   ┌─────────────────┐
   │   DROP ARCHIVE  │
   └─────────────────┘


           ≠


PERSON ───── USB DRIVE ───── PERSON
             OFFLINE
```

---

# 🗺️ The database

The archive documents public USB installations through an interface built for exploration rather than surveillance.

Entries can contain information such as:

* identifier;
* installation name;
* city;
* country;
* coordinates;
* storage capacity;
* installation date;
* status;
* photographs;
* notes and local context.

The current web application ships its archive data with the static site rather than depending on a runtime database API.

The map is rendered with [`react-simple-maps`](https://github.com/zcreativelabs/react-simple-maps) and geographic data from [`world-atlas`](https://github.com/topojson/world-atlas).

---

# 🧰 Make your own drop

Anyone can participate — provided the installation is **lawful, safe and respectful of the place where it is installed**.

The basic process:

### `01 / READ`

Understand the project before installing anything.

Choose a genuinely public and safely accessible location.

Get permission where required.

### `02 / PREPARE`

Use an ordinary USB flash drive.

Remove unnecessary vendor software and format it for broad compatibility.

FAT32 remains useful for interoperability, although its **4 GB maximum individual file size** should be kept in mind.

### `03 / LOAD`

Begin with a small README or manifesto explaining the project.

Include useful local information where appropriate.

### `04 / PROTECT`

Protect the body of the USB drive against moisture and physical stress while keeping the connector usable.

### `05 / INSTALL`

Mount the device securely.

Do not damage protected, historic or privately owned surfaces.

Do not create a hazard.

Leave enough physical clearance for different computers.

### `06 / DOCUMENT`

Take:

* one overview photograph;
* one medium-distance photograph;
* one close-up.

Then document the installation.

---

# ⚠️ Public USB devices are untrusted

This part matters.

**Never assume that a public USB drive is safe simply because it belongs to this project.**

Anyone can alter a publicly accessible device.

That alteration can include:

* malicious files;
* infected documents;
* executable malware;
* misleading filenames;
* modified firmware;
* malicious USB hardware.

If you inspect a public drop:

> [!IMPORTANT]
> **Treat the entire device as hostile until proven otherwise.**
>

Recommended precautions include:

* use an isolated or sacrificial computer;
* disable USB autorun;
* keep the operating system updated;
* do not execute unknown binaries;
* do not enable macros in unknown documents;
* avoid connecting the device to a machine containing valuable credentials or sensitive files;
* inspect suspicious content in a sandbox or virtual machine;
* scan files before opening them.

**Antivirus and file scanning can reduce risk.**

**They cannot make unknown hardware trustworthy.**

If you do not understand the risk model of plugging an unknown USB device into a computer, admire the installation from a safe distance instead.

There is absolutely no shame in having functioning USB ports tomorrow.

---

# 🏗️ Architecture

The website is intentionally lightweight.

```text
Off-The-Record/
│
├── app/
│   ├── about/
│   ├── db/
│   ├── how-to/
│   ├── manifesto/
│   ├── archive-data.ts
│   ├── layout.tsx
│   └── page.tsx
│
├── public/
│   └── otr-icon.png
│
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── vercel.json
└── LICENSE
```

### Stack

* **Next.js 16**
* **React 19**
* **TypeScript**
* **Tailwind CSS 4**
* **react-simple-maps**
* **TopoJSON / world-atlas**
* **pnpm**
* **Node.js 24**

The application uses Next.js static export:

```js
output: 'export'
```

A production build therefore generates a static site in:

```text
out/
```

The current repository contains no application API routes and does not require a runtime application database to serve the archive.

**The website can be reduced to static files.**

As it should be.

---

# 🧑‍💻 Development

## Requirements

* **Node.js 24**
* **pnpm**

Clone the repository:

```bash
git clone https://github.com/hopeugetherpes/Off-The-Record.git
cd Off-The-Record
```

Install dependencies:

```bash
pnpm install --frozen-lockfile
```

Start the development server:

```bash
pnpm dev
```

Then open:

```text
http://localhost:3000
```

---

## Type checking

```bash
pnpm typecheck
```

---

## Production build

```bash
pnpm build
```

The static export will be generated in:

```text
out/
```

It can then be served by virtually any static web server.

No Node.js application server is required after export.

---

# ▲ Deploy to Vercel

<p>
  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhopeugetherpes%2FOff-The-Record">
    <img src="https://vercel.com/button" alt="Deploy with Vercel">
  </a>
</p>

The repository is configured for a straightforward Vercel deployment.

1. Click **Deploy with Vercel**.
2. Import the repository.
3. Let Vercel detect Next.js.
4. Deploy.

The project includes:

```text
vercel.json
next.config.mjs
pnpm-lock.yaml
```

and requires no application database or custom server configuration for the current static architecture.

---

# 📬 Submit a drop

Built one?

Put it on the map.

Send you submissions:

**[HERE](mailto:anatole@anatole.co?subject=Off%20The%20Record%20-%20Submission)**

Suggested information:

```text
DROP NAME:
CAPACITY:
CITY:
COUNTRY:
COORDINATES:
INSTALLATION DATE:
STORY / CONTEXT:
```

Attach:

1. an overview photograph;
2. a medium-distance photograph;
3. a close-up of the installation.

---

# Origins — Dead Drops

Off The Record does not pretend this idea appeared from nowhere.

It is forked from [Dead Drops](https://deaddrops.com/), the public USB file-sharing project initiated by [Aram Bartholl](https://arambartholl.com/) in 2010.

The [original project](https://www.flickr.com/photos/bartholl/sets/72157625170875990/) placed USB drives into walls around New York City and invited strangers to connect directly to them.

The gesture was beautifully primitive:

> Take the network away from the network.

Off The Record preserves the fundamental idea while rebuilding the web archive, documentation and presentation around it.

---

# 🏴 Why?

Because files do not inherently belong in somebody else's data center.

Because infrastructure can be physical.

Because networks do not have to be invisible.

Because not every interaction needs an identity.

Because a USB drive sticking out of concrete is sometimes a more interesting interface than another login page.

Because computing used to make its machinery visible.

And because there is something beautifully absurd about constructing a worldwide network whose fundamental unit is:

```text
one USB stick
+
one wall
+
one stranger
```

**No cloud required.**

---

# © Public Domain; F*ck Copyright

Off The Record is released under **[CC0 1.0 Universal](https://github.com/hopeugetherpes/Off-The-Record/blob/main/LICENSE)**.

That means the work is dedicated to the public domain to the fullest extent permitted by law.

You may:

* copy it;
* modify it;
* fork it;
* redistribute it;
* remix it;
* host it;
* build something stranger with it;
* use it commercially;
* use it without asking permission.

Attribution is appreciated where it helps preserve project history, but no copyright permission is required under CC0.

**Knowledge does not become more valuable by being hoarded.**

---

<p align="center">
  <strong>OFF THE RECORD</strong>
</p>

<p align="center">
  PUBLIC · OFFLINE · PEER TO PEER · READ / WRITE
</p>

<p align="center">
  <a href="https://off-the-record.anatole.co/">ENTER THE NETWORK</a>
  ·
  <a href="https://github.com/hopeugetherpes/Off-The-Record">SOURCE</a>
  ·
  <a href="https://github.com/hopeugetherpes/Off-The-Record/blob/main/LICENSE">CC0</a>
</p>

<p align="center">
  <strong>THE NETWORK HAS NO CLOUD.</strong>
</p>
