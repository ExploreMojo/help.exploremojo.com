import Layout from '../../layouts/ChapterLayout'
import {Headline, Text, Image, Video, YouTube, Download, CTA} from '@trendspurt/trendspurt-theme'
export default Layout


# CMS Guide

## Special content components

You can use our custom components within your Markdown (.md) files. The following components are supported:

```
<Headline>This is a headline</Headline>
<Headline tag="h1">This is a headline</Headline>
<Headline tag="h3">This is a headline</Headline>
```

```
<Text>Some text</Text>
```

```
<Image src="http://www...">Image caption</Text>
<Image src="http://www..." source="Company name or URL">Image caption</Text>
```

```
<Download url="http://www.google.com" title="Download your free copy now!" />
```

```
<Video path="/testvideo.mp4" title="A local test video" />
```

```
<YouTube id="i6952GF3pdI" title="A local test video" />
```