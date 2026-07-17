import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import MarkdownRenderer from '@/components/blog/MarkdownRenderer';
import { formatDate } from '@/utils/formatDate';
import { useFetch } from '@/hooks/useFetch';
import { BlogPost } from '@/types/blog';

const SinglePost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, loading } = useFetch<BlogPost>(`/blog/${slug}`);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href,
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog">
          <Button>Back to Blog</Button>
        </Link>
      </Container>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <Container size="md">
        {/* Back Button */}
        <Link to="/blog">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Button>
        </Link>

        {/* Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-emerald text-white rounded-full">
              {post.category}
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime} min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>

          {/* Cover Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Share Button */}
          <div className="flex justify-end">
            <Button variant="outline" onClick={handleShare}>
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MarkdownRenderer content={post.content} />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-border">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-muted text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.article>
      </Container>
    </div>
  );
};

export default SinglePost;
